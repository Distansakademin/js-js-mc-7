import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact';
import Greeting from './Pages/Greeting';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My application</h1>

          <nav>
            <Link to="/" className='App-link'>Home</Link>|
            <Link to="/about" className='App-link'>About</Link>|
            <Link to="/contact" className='App-link'>Contact</Link>|
            <Link to="/greeting" className='App-link'>Greeting</Link>
          </nav>

        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/greeting' element={<Greeting />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
