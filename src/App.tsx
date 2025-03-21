import { useState } from 'react'
import './App.css'
import { WeatherResponse } from './types/WeatherResponse';
import { getAllForecastData, getForecastDataOneDay, getWeatherData } from './services/WeatherService';
import {  MoonLoader } from 'react-spinners';
import { CityInfo } from './components/CityInfo/CityInfo';
import { WeatherDetails } from './components/WeatherDetails/WeatherDetails';
import { ForecastChart } from './components/ForecastChart/ForecastChart';

function App() {
  
  const [city, setCity] = useState<string>("Mendoza");
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [forecastOneDay, setForecastOneDay] = useState<WeatherResponse | null>(null);
  const [forecastAll, setForecastAll] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Para buscar con el boton search usamos handleSearch
  // Buscamos los datos generales del clima y del pronostico para mostrar humedad, presion, etc
  const handleSearch = async() => {
    if(!city){
      return;
    }
    setLoading(true);
    const dataWeatherGeneral = await getWeatherData(city); // solicitamos weather general
    const dataForecastOneDay = await getForecastDataOneDay(city); // forecast de un dia para weather details
    const dataAllForecast = await getAllForecastData(city); // forecast de 14 dias para chart
    setWeather(dataWeatherGeneral);
    setForecastOneDay(dataForecastOneDay);
    setForecastAll(dataAllForecast);
    setLoading(false);
  }



  return (
    <>
      <div>
        <h1 className='h1-weather-dashboard'>Weather Dashboard</h1>
        <div className='container-input-btn-search'>
          <input
            className='input-city' 
            type="text" 
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder='Enter city name...'
            />
            <button 
              className='btn-search-city'
              onClick={handleSearch}
              >
              Search
            </button>
           {loading && <MoonLoader color="gray"/>}
        </div>
            <div className='weather-container'>
              <div className='weather-left'>
                {weather && !loading && (
                  <CityInfo weather={weather} />
                )}

                {forecastOneDay && !loading && (
                  <WeatherDetails weather={weather} forecast={forecastOneDay}/>  
                )}
              </div>
              <div className='weather-right'>
                {forecastAll && !loading && (
                  <ForecastChart forecastAllData={forecastAll}/>  
                )}
              </div>
              {!weather && !loading && <p>No hay información disponible</p>}
            </div>
        </div>
    </>
  )
}

export default App
