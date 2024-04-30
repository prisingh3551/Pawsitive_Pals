import React from "react";
import { BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginSignup from './pages/LoginSignup';
import Quiz from './pages/Quiz';
import Donate from './pages/Donate';
import ADOPTFORM from './pages/ADOPTFORM';
import Rehome from './pages/Rehome';
import CatsPage from './pages/CatsPage';
import DogsPage from './pages/DogsPage';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/loginsignup" element={<LoginSignup />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/donate" element={<Donate />} />
           <Route path="/adoptform" element={<ADOPTFORM />} />
           <Route path="/rehome" element={<Rehome />} />
           <Route path="/catspage" element={<CatsPage />} />
           <Route path="/dogspage" element={<DogsPage />} />
         </Routes>
       </div>
    </Router>
      
    
  );
}

export default App;
