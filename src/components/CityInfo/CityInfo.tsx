import React from 'react'
import "./cityinfo.css";

type CityInfoProps = {
    weather : any; // Ya que recibimos de la api y no hay un tipado definido
}

export const CityInfo = ({weather} : CityInfoProps) => {
  return (
    <>
        <div className='container-city-info'>
            <h1>{weather.location.name}</h1>
            <h3>{new Date(weather.location.localtime).toLocaleDateString('es-ES')}</h3>
            <img src={weather.current.condition.icon} alt="icon-weather" /> {/* dependerá del clima, si esta nublado o soleado - icon */}
            <h1>{weather.current.temp_c}°C</h1>
            <h2>{weather.current.condition.text}</h2>
            <h3>Feels like {weather.current.feelslike_c}°C</h3>
        </div>
    </>
  )
}
