import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import './App.css';

import CheckerGame from "./components/checker-game.component";

function App() {
  return (
    <AlertProvider template={AlertTemplate}>
      <Router>
        <div className="container">
          <Route path="/" exact component={CheckerGame} />
        </div>
      </Router>
    </AlertProvider>
  );
}

export default App;
