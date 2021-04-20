import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Miapr4 from "./labs/miapr4/Miapr4";
import Miapr5 from "./labs/miapr5/Miapr5";
import Miapr6 from "./labs/miapr6/Miapr6";
import Miapr7 from "./labs/miapr7/Miapr7";
import reportWebVitals from './reportWebVitals';
import 'react-chartjs-2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Switch>
        <Route exact path="/miapr4">
          <Miapr4 />
        </Route>
        <Route exact path="/miapr5">
          <Miapr5 />
        </Route>
        <Route exact path="/miapr6">
          <Miapr6 />
        </Route>
        <Route exact path="/miapr7">
          <Miapr7 />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
