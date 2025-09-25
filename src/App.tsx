import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./react-app/pages/Home";
import AboutPage from "./react-app/pages/About";
import ExperiencePage from "./react-app/pages/Experience";
import ProjectsPage from "./react-app/pages/Projects";
import ContactPage from "./react-app/pages/Contact";
import Navigation from "./react-app/components/Navigation";
import MatrixRain from "./react-app/components/MatrixRain";
import ParticleField from "./react-app/components/ParticleField";

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <MatrixRain />
        <ParticleField />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}
