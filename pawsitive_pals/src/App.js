import React from "react";
import { BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Quiz from './pages/Quiz';
import Donate from './pages/Donate';
import ADOPTFORM from './pages/ADOPTFORM';
import Rehome from './pages/Rehome';
import CatsPage from './pages/CatsPage';
import DogsPage from './pages/DogsPage';
import LoginSignup from "./pages/LoginSignup";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/loginSignup" element={<LoginSignup />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/adoptform" element={<ADOPTFORM />} />
          <Route path="/rehome" element={<Rehome />} />
          <Route path="/catspage" element={<CatsPage />} />
          <Route path="/dogspage" element={<DogsPage />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
    </Router>  
  );
}

export default App;