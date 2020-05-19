import React, {Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import {Title} from './components/Title'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title>Search Movies</Title>
      </div>
    );
  }
}

export default App;
