import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';

import CheckerGame from "./components/checker-game.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={CheckerGame} />
      </div>
    </Router>
  );
}

export default App;
