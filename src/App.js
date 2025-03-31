import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import HomePage from './HomePage.js';
import Commercial from './Commercial.js';
import Outdoor from './Outdoor.js';
import About from './About.js';
import Contact from './Contact.js';
import './Commercial.css';
import './Outdoor.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/outdoor" element={<Outdoor />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
