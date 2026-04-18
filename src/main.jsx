import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import Profile from "./pages/Profile"
createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
    <Profile />
  // </BrowserRouter>
)
