import React, { Component } from 'react';
import PageList from './page/pageList';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <Link to="/pages" >Pages</Link>
            <Link to="/page/add" >add Page</Link>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PageList />
      </div>
    );
  }
}

export default App;
