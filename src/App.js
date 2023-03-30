import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { BsFillSunFill, BsMoon } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import HamburgerPop from './components/HamburgerPop';
import './styles/App.css';
import Footer from './pages/Footer';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Services from './pages/Services';
import useDarkMode from './components/dep/DarkMode';

function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <Router>
      <div className="App">
        <header>
          <NavBar />
          <div className={isDarkMode ? 'dark' : ''}>
            <button type="button" onClick={toggleDarkMode}>
              <IconContext.Provider value={{ size: '3em', className: 'global-class-name darkmode-btn', color: 'black' }}>
                {isDarkMode ? <BsFillSunFill /> : <BsMoon />}
              </IconContext.Provider>
            </button>
          </div>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/services" element={<Services />} />
          </Routes>
          <HamburgerPop />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
