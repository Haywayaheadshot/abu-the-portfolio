import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/App.css";

import NavBar from "./components/NavBar";
import HamburgerPop from "./components/HamburgerPop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <NavBar />
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
