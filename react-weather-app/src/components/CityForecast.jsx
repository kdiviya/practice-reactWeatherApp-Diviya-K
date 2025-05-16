import {useParams} from "react-router-dom";
import {useState} from "react";
import { Link } from "react-router-dom";


const CityForecast = ({weatherData}) => {

    const {city} = useParams(); 
    const cityName =weatherData[city];
    const [details, displayDetails] = useState("");

    !cityName && <h1>City not found</h1>;

    const handleViewDetail = () => {
        city && displayDetails(cityName.details);

    } 

    return (
        <div className ="forecast">
            <h1>Weather Forecast for {city}</h1>
            <p id= "summary">{cityName.summary}</p>
            <button className="view-button" type ="button" onClick= {handleViewDetail}>View Details</button>
            <p id="details">{details}</p>
            <button className = "back-button" type="button"><Link to="/" >Back to city list</Link></button>
        </div>

    );
};

export default CityForecast;