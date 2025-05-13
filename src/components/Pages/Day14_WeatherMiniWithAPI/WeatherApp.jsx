import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Weather from './pages/WeatherResult';

export default function App() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/weather" element={<Weather />} />
            </Routes>
    )

}