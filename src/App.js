import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./assets/img/developerJatin.svg"
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
          <Route path="/developerjatin/" element={<Header logo={logo} />}>
            <Route index element={<Home />} />
            <Route path='/developerjatin/about' element={<About />} />
            <Route path='/developerjatin/experience' element={<Experience />} />
            <Route path='/developerjatin/portfolio' element={<Portfolio/>}/>
            <Route path='/developerjatin/contact' element={<Contact/>}/>
            <Route path='/developerjatin/education' element={ <Education/>}/>
            <Route path='/developerjatin/skills' element={ <Skills/>}/>
            <Route path="*" element={<Nopage />} />
          </Route >
        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;
