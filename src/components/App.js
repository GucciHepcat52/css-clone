import './App.css';
import Header from './header/Header';
import { Routes, Route } from "react-router-dom";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
