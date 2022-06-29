import "./App.css";
import BootstrapNavbar from "./components/BootstrapNavbar";
import Home from "./components/Home";

import { Routes, Route } from "react-router-dom";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <BootstrapNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<ContactMe />} />
        <Route path="about" element={<AboutMe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
