import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import routes from './routes';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadLanguages } from '../actions/languageActions';

class App extends Component {
  static initialAction() {
    return loadLanguages();
  }

  componentDidMount() {
    if (!this.props.languages) {
      this.props.dispatch(App.initialAction());
    }
  }

  render() {
    return (
      <div className="App">
        <Header lang={this.props.lang} languages={this.props.languages} />
        <Switch>
          {routes.map((route, i) => <Route key={i} {...route} />)}
        </Switch>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  lang: PropTypes.object.isRequired,
  languages: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    lang: state.lang,
    languages: state.languages
  };
}

export default connect(mapStateToProps)(App);
