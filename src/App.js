import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButton from './components/TopButton';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherServices';



function App() {
  const fw = async () =>{
    const data = await getFormattedWeatherData({q:"tegal"})


    alert(data.name)
  }

  fw();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButton/>
      <Inputs/>
      <TimeAndLocation/>
      <TemperatureAndDetails/>  
      <Forecast judul="prakiraan per jam"/>
      <Forecast judul="prakiraan per hari"/>
    </div>
  );
}

export default App;
