import House from "../house"

const FeaturedHouse = ({house}) => {
    if (house)
    return ( 
            <div className="row featuredHouse">
                <div className="col-md-12 text-center">
                        Featured House
                </div>
                <House house={house} />
            </div>
     );
     return  <div>No featured House at this time</div>;
}
 
export default FeaturedHouse; 