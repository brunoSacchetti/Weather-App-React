import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

type ForecastChartProps = {
    forecastAllData: any
}

export const ForecastChart = ({forecastAllData}:ForecastChartProps) => {

  const dataChart = forecastAllData.forecast.forecastday.map((day: any) => ({
    date: new Date(day.date).toLocaleDateString("es-ES", { weekday: "short" }), // Día de la semana
    maxTemp: day.day.maxtemp_c, // Temperatura máxima
    minTemp: day.day.mintemp_c, // Temperatura mínima
  }));

  console.log(dataChart);
  
  
  return (
    <div className="forecast-container">
    <h3>Pronóstico de Temperatura</h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={dataChart}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="maxTemp" stroke="#ff7300" strokeWidth={2} name="Máx" />
        <Line type="monotone" dataKey="minTemp" stroke="#007bff" strokeWidth={2} name="Mín" />
      </LineChart>
    </ResponsiveContainer>
  </div>
  )
}
