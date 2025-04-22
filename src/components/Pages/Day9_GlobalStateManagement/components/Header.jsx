
import { useTheme } from '../../../context/ThemeContext';

export default function Header() {
    const { theme } = useTheme();

    return (
        <header className={`p-4 text-white ${theme === "light" ? "bg-blue-500" : "bg-gray-800"}`}>
            <h1 className='text-xl font-bold'>React Context Demo - Theme: {theme}</h1>
        </header>
    )

}