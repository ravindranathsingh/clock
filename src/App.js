import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Category from './components/Category';
import StopWatch from './pages/StopWatch';
import Timmer from './pages/Timmer';
import Counter from './pages/Counter';

function App() {
  return (
    <div className="App">
      <Router>
        <Category />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stopwatch' element={<StopWatch />} />
          <Route path='/timmer' element={<Timmer />} />
          <Route path='/counter' element={<Counter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
