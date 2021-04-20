import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="nav-content">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/miapr4" className="nav-link">Миапр 4</Link>
            </li>
            <li className="nav-item">
              <Link to="/miapr5" className="nav-link">Миапр 5</Link>
            </li>
            <li className="nav-item">
              <Link to="/miapr6" className="nav-link">Миапр 6</Link>
            </li>
            <li className="nav-item">
              <Link to="/miapr7" className="nav-link">Миапр 7</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default App;