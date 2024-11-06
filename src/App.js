import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import logo from "./assets/img/developerJatin.svg"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from './components/Header';
import Footer from './components/Footer';
import Nopage from './components/Nopage';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/developerJatin/" element={<Header  />}>
            <Route index element={<Home />} />
            <Route path='/developerJatin/about' element={<About />} />
            <Route path='/developerJatin/experience' element={<Experience />} />
            <Route path='/developerJatin/portfolio' element={<Portfolio/>}/>
            <Route path='/developerJatin/contact' element={<Contact/>}/>
            <Route path='/developerJatin/education' element={ <Education/>}/>
            <Route path='/developerJatin/skills' element={ <Skills/>}/>
            <Route path="*" element={<Nopage />} />
          </Route >
        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;
