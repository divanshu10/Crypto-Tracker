
import './App.css';
import Footer from "./components/Common/Footer/footer";
import Header from "./components/Common/Header";
import HomePageComponent from './components/HomePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import DashboardPage from "./pages/dashboard";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
