import { CurrentWeather } from "./CurrentWeather";
import { Location } from "./Location";

// Tipo para la respuesta completa de WeatherAPI
export interface WeatherResponse {
    location: Location;
    current: CurrentWeather;
}