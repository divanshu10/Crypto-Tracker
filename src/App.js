
import './App.css';
import Footer from "./components/Common/Footer/footer";
import Header from "./components/Common/Header";
import HomePageComponent from './components/HomePage';
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import HomePage from "./pages/home";
import DashboardPage from "./pages/dashboard";
import CoinPage from './pages/coin';
import ComparePage from './pages/compare';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <HashRouter basename='/'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/coin/:id" element={<CoinPage />} />
        <Route path="/compare" element={<ComparePage />} />
      </Routes>
      </HashRouter>
    </BrowserRouter>
  </div>
  
  );
}

export default App;
