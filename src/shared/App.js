import React, { Component } from 'react';
import './App.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 className="header__title">Header</h1>
        </div>
        <div className="body">
          <h1 className="body__title">Main Content</h1>
        </div>
        <div className="footer">
          <h1 className="footer__title">Footer</h1>
        </div>
      </div>
    );
  }
}

export default App;
