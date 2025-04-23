import ThemeToggleButton from "./components/ThemeToggleButton";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";

export default function Day09UseContextDemo() {
    return (
        <div className="p-6">
            <ThemeProvider>
            <Header />
            <div className="mt-6">
                <p>This page shows how to use Context for global theme management.</p>
                <ThemeToggleButton />
            </div>
            </ThemeProvider>
        </div>


    )

}