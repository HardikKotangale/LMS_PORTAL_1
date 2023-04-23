import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/homePage/NavBar";
import Home from './components/Home';
import LogIn from './components/LogIn';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Page404 from './components/Page404';
import Admin from './components/signInPage/Admin';
import Student from './components/signInPage/Student';
import AboutUs from './components/AboutUs';
import JobPortal from './components/JobPortal';
import Services from './components/Services';
//import SignIn from './components/SignIn';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/jobportal" element={<JobPortal/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/student" element={<Student />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
