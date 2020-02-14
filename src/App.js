import React, { Component } from 'react';
import Routes from './routes';
import './assets/css/style.css';

class App extends Component {
  render() {
    return(
      <div className="app">
        <Routes/>
      </div>
    )
  }
}

export default App;