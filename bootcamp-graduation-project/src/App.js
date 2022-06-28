import "./App.css";
import BootstrapNavbar from "./components/BootstrapNavbar";
import Home from "./components/Home";

import { Routes, Route } from "react-router-dom";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BootstrapNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<ContactMe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
