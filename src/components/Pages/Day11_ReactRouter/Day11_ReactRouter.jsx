import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";

export default function App() {
    return (
        <div className="p-6">
            <nav className="flex gap-4 mb-6">
                <Link to="/" className="text-blue-600 hover:underline">Home</Link>
                <Link to="/about" className="text-blue-600 hover:underline">About</Link>
                <Link to="/users" className="text-blue-600 hover:underline">Users</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </div>
    )
}