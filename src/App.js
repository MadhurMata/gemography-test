import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RepositoriesList from './pages/RepositoriesList';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={RepositoriesList} />
      </Router>
    </div>
  );
}

export default App;
