
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import WhoAmI from './pages/WhoAmI'
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";


function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whoami" element={<WhoAmI />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          

        </Routes>

        <Footer />

      </Router>
      
    </div>
  );
}

export default App;
