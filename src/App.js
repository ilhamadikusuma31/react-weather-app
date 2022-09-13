import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButton from './components/TopButton';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherServices';
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
  const [query, setQuery] = useState({q:"jakarta"});
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  
  // useEffect, yang ada didalam array akan di follow up oleh react apakah ada perubahan 
  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "lokasi sekarang.";

      toast.info("mendapatkan cuaca " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Sukses mendapatkan cuaca ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);


  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };



  return (
    <div
    className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
  >
      <TopButton setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation cuaca={weather}/>
          <TemperatureAndDetails cuaca={weather}/>  
          <Forecast judul="prakiraan per jam" items={weather.hourly}/>
          <Forecast judul="prakiraan per hari" items={weather.daily}/>
        </div>
      )}
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />      
    </div>
  );
}

export default App;
