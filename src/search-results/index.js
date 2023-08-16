import SearchResultRow from './search-results-row';
import { useParams } from "react-router-dom";

const SearchResults = ({allHouses}) => {
    const { country } = useParams();
    const filteredHouses = allHouses.filter((h) => h.country === country)
    return (  
        <div className='mt-2'>
            <h4>Results for {country}:</h4>
            <table>
                <tbody>
                    {filteredHouses.map((h) => (
                        <SearchResultRow key={h.id} house={h} />
                    ))}
                </tbody>
            </table>

        </div>
    );
}
 
export default SearchResults;