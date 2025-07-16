import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import './App.css'

function App() {
  return (
    <Router basename="/codea3website">
      <div className="App">
        <nav style={{ 
          padding: '1rem', 
          background: '#f0f0f0', 
          marginBottom: '2rem' 
        }}>
          <Link to="/" style={{ 
            marginRight: '1rem', 
            textDecoration: 'none', 
            color: '#333',
            fontWeight: 'bold' 
          }}>
            Home
          </Link>
          <Link to="/about" style={{ 
            marginRight: '1rem', 
            textDecoration: 'none', 
            color: '#333',
            fontWeight: 'bold' 
          }}>
            About
          </Link>
          <Link to="/services" style={{ 
            textDecoration: 'none', 
            color: '#333',
            fontWeight: 'bold' 
          }}>
            Services
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  )
}

// Placeholder components - you can create separate files for these later
function About() {
  return (
    <div>
      <h1>About CodeA3 Solutions</h1>
      <p>We are a leading software development company...</p>
    </div>
  )
}

function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        <li>Web Development</li>
        <li>Mobile App Development</li>
        <li>UI/UX Design</li>
        <li>Cloud Solutions</li>
      </ul>
    </div>
  )
}

export default App