import { Link } from "react-router-dom";


const CityList= ({weatherData}) => {
    
return(
    <div className="cities">
        <h1>City Weather Forecast</h1>
        <ul>
         { Object.keys(weatherData).map((city) => (
            <li key={city}>
            <Link to={`/forecast/${city}`}>{city}</Link>
            </li>
        ) ) }
       
     </ul>
    </div>

);

};

export default CityList;