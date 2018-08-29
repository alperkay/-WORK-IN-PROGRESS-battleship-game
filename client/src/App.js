import React, { Component } from 'react';
import './App.css';
import MainMenu from './components/MainMenu'
import Game from './components/Game'
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/main" component={MainMenu} />
          <Route exact path="/games/:id" component={Game} />
          <Route exact path="/" render={ () => <Redirect to="/main" /> } />
        </div>
      </Router>
    );
  }
}

export default App;
