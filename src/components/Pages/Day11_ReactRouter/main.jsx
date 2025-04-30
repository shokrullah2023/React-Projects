import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./Day11_ReactRouter";
import React from "react";

// This moved to the main main.jsx file cause it didn't work over here
ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Day11_ReactRouter />
    </BrowserRouter>
)