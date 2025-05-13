import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your OpenWeatherMap API key

export default function WeatherResult() {
    const { city } = useParams();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const {data, loading, error} = useFetch(url);

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
            <h2 className="text-2xl font-bold mb-4">Weather in {city}</h2>

                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {data && (
                    <div className="space-y-2">
                        <p><strong>Temperature:</strong>{data.main.temp} C</p>
                        <p><strong>Weather:</strong>{data.weather[0].description}</p>
                        <p><strong>Humdity:</strong>{data.main.humidity}%</p>
                        <p><strong>Wind:</strong>{data.wind.speed} m/s</p>
                    </div>
                )}
            
        </div>
    )



}