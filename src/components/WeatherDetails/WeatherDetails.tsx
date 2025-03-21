import { Droplets, Gauge, Sunrise, Sunset, Wind } from 'lucide-react';
import "./weatherdetails.css"

type WeatherDetailsProps = {
    weather: any
    forecast: any;    
}

export const WeatherDetails = ({weather, forecast} : WeatherDetailsProps) => {

    if (!weather || !weather.current || !forecast.forecast) {
        console.log(forecast);
        return <p>No weather data available</p>;
    }

  return (
    <div>
            <div className='container-weather-details'>
                <div className='container-gral container-humidity'>
                    <Droplets/>
                    <h4>Humidity</h4>
                    <p>{weather.current.humidity}%</p>
                </div>

                <div className='container-gral container-pressure'>
                    <Gauge/>
                    <h4>Pressure</h4>
                    <p>{weather.current.pressure_mb} hPa</p> {/* En hPa */}
                </div>    

                <div className='container-gral container-sunset'>
                    <Sunset/>
                    <h4>Sunset</h4>
                    <p>{forecast.forecast.forecastday[0].astro.sunset}</p>
                </div>

                <div className='container-gral container-wind-speed'>
                    <Wind/>
                    <h4>Wind Speed</h4>
                    <p>{weather.current.wind_kph}km/h</p>
                </div>

                <div className='container-gral container-sunrise'>
                    <Sunrise/>
                    <h4>Sunrise</h4>
                    <p>{forecast.forecast.forecastday[0].astro.sunrise}</p>
                </div>
                </div>
            </div>
  )
}
