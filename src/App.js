import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButton from './components/TopButton';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherServices';
import { useEffect, useState } from "react";



function App() {
  const [query, setQuery] = useState({q:"berlin"});
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);


  // useEffect, yang ada didalam array akan di follow up oleh react apakah ada perubahan
  useEffect(() => {
    const fw = async () =>{
      await getFormattedWeatherData({...query, units}).then((data)=>{setWeather(data)})}
    fw();

  }, [query,units,weather]);

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButton/>
      <Inputs/>

      {weather && (
        <div>
          <TimeAndLocation cuaca={weather}/>
          <TemperatureAndDetails cuaca={weather}/>  
          <Forecast judul="prakiraan per jam"/>
          <Forecast judul="prakiraan per hari"/>
        </div>
      )}

    </div>
  );
}

export default App;
