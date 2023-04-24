import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// routes
import Home from './routes/Home';
// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Features from './routes/Features';
import Pricing from './routes/Pricing';
import Contact from './routes/Contact';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/features' element={<Features/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
   

      </div>
    </Router>
  );
}

export default App;
