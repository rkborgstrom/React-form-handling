import React, { Component } from 'react';
import Header from './components/Header';
import Forms from './components/Forms';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Forms />
      </div>
    );
  }
}

export default App;
