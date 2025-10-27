import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/Mentions Légales";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions legales" element={<MentionsLegales />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
