import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import routes from './routes';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header lang={this.props.lang} />
        <Switch>
          {routes.map((route, i) => <Route key={i} {...route} />)}
        </Switch>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  lang: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    lang: state.lang
  };
}

export default connect(mapStateToProps)(App);
