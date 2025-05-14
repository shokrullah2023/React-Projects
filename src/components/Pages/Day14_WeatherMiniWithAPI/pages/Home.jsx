import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home() {
    const [city, setCity] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!city.trim()) return;
        navigate(`/weather/${city}`);
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
            <h2 className="text-2xl font-bold mb-4">Weather Finder</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={city}
                    placeholder="Enter city name"
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-2 border rounded mb-4"
                />
                <button className="w-full bg-blue-600 text-white p-2 rounded hober:bg-blue-700">Search Weather</button>
            </form>
        </div>
    )

}