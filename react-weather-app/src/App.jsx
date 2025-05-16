
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CityList from './components/CityList';
import CityForecast from './components/CityForecast';
import weatherData from "./weatherData.json";
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route 
        path="/" 
        element={<CityList weatherData={weatherData}/>}
        />

        <Route
        path="/forecast/:city"
        element={<CityForecast weatherData={weatherData}/>}
        />    
        
      </Routes>
    </Router>


  );
}

export default App;
