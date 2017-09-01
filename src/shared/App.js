import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
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
