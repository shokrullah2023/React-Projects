import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Day11_ReactRouter from './components/Pages/Day11_ReactRouter/Day11_ReactRouter.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <Day11_ReactRouter />
  </BrowserRouter>
)
