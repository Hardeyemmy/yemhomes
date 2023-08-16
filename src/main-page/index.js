import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';
import SearchResults from '../search-results';
import HouseFilter from './house-filter';
import HouseFromQuery from '../house/houseformquery';

function App() {

  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async() => {
      const rsvp = await fetch("/houses.json");
      const houses = await rsvp.json(); 
      setAllHouses(houses);
    };
    fetchHouses();
  }, []); 

  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex]; 
    };
  }, [allHouses]);


   

  return (
    <Router>
     <div className="container">
      < Header subtitle="Providing avoidable homes all over the globe"/>
      < HouseFilter allHouses={allHouses} />
    </div>
      <Switch>
        <Route path="/house/:id">
            <HouseFromQuery allHouses={allHouses} />
        </Route>
        <Route path="/searchresults/:country">
            <SearchResults allHouses={allHouses} />
        </Route>
        <Route path="/">
            <FeaturedHouse house={featuredHouse}/>
        </Route>
      </Switch>
    
    </Router>    
  );
}

 export default App;
