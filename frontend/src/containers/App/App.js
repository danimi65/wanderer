import React, { Component } from 'react';
import LandingView from '../landingView/landingView';
import AddView from '../addView/addView';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingView} />
          <Route path="/add" exact component={AddView} />
        </Switch>
      </div>
    );
  }
}

export default App;
