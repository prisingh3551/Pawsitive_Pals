import React from "react";
import { BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/donate" element={<Donate />} />
           <Route path="/adoptform" element={<ADOPTFORM />} />
           <Route path="/rehome" element={<Rehome />} />
           <Route path="/catspage" element={<CatsPage />} />
           <Route path="/dogspage" element={<DogsPage />} />
           {/* <Route path="/adoptFill-form" element={<AdoptFillForm />} /> */}
         </Routes>
       </div>
    </Router>
      
    
  );
}

export default App;
