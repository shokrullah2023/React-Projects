import { useTheme } from "../context/ThemeContext";

export default function ThemeToggleButton() {
    const { toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-600" >
                Toggle Theme
            </button>
    )
}