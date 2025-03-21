import { WeatherResponse } from "../types/WeatherResponse";

const API_KEY = import.meta.env.VITE_CLIMA;

const BASE_URL = "http://api.weatherapi.com/v1"

// Obtenemos la informacion general del clima
export const getWeatherData = async (city: string) : Promise<WeatherResponse | null> => {

    console.log("API KEY", API_KEY);
    
    const url = `${BASE_URL}/current.json?key=${API_KEY}&q=${city}&aqi=no`;
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("No se encontraron datos del clima")
        }
        const data : WeatherResponse = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

// Aca obtenemos la informacion del pronostico - forecast para el dia presente de la consulta del clima
export const getForecastDataOneDay = async (city: string) : Promise<WeatherResponse | null> => {
    const url = `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&day=1&aqi=no&alerts=no`;
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("No se encontraron datos del clima")
        }
        const data : WeatherResponse = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

// Aca obtenemos la informacion del pronostico - forecast para 14 dias - grafico
export const getAllForecastData = async (city: string) : Promise<WeatherResponse | null> => {
    const url = `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=14&aqi=no&alerts=no`;
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("No se encontraron datos del clima")
        }
        const data : WeatherResponse = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}


