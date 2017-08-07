import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Sign Up</h2>
        </div>
        <p className="App-intro">
          <form>
              <div className="form-group">
                  <label> Username </label>
                    <input type="text" />
              </div>
              <div className="form-group">
                  <label> Password </label>
                      <input type="password" />
              </div>
              <button type="submit">Register</button>
          </form>
        </p>
      </div>
    );
  }
}

export default App;
