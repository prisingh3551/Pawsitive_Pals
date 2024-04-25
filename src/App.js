import './App.css';
import MainPage from './pages/MainPage';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Articles from './components/Articles';
import ADR from './components/ADR';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Quiz from './pages/Quiz';

function App() {
  return (

    <>
      <Header></Header>
      <Navbar></Navbar>
      <MainPage></MainPage>
      <ADR></ADR>
      <Articles></Articles>
      <AboutUs></AboutUs>
      <Login></Login>
      <SignUp></SignUp>
      <Quiz></Quiz>
    </>
  );
}

export default App;

