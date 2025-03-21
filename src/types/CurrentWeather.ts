import { Condition } from "./Condition";

// Tipo para el clima actual
export interface CurrentWeather {
    temp_c: number; // Temperatura en grados Celsius
    temp_f: number; // Temperatura en grados Fahrenheit
    is_day: number; // Si es de día (1) o de noche (0)
    condition: Condition;
    wind_mph: number; // Velocidad del viento en millas por hora
    wind_kph: number; // Velocidad del viento en kilómetros por hora
    humidity: number; // Humedad en porcentaje
    cloud: number; // Porcentaje de nubosidad
    feelslike_c: number; // Temperatura que se siente en grados Celsius
    feelslike_f: number; // Temperatura que se siente en grados Fahrenheit
    vis_km: number; // Visibilidad en kilómetros
  }