import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import routes from './routes';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadLang, loadLanguages } from '../actions/languageActions';

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  static initLang(lang) {
    return loadLang(lang);
  }
  static initLanguages() {
    return loadLanguages();
  }

  componentDidMount() {
    // if (!this.props.lang.hasOwnProperty('id')) {
    //   this.context.router.history.push('/en-AU/404');
    // }
    if (!this.props.languages) {
      this.props.dispatch(App.initLanguages());
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
  languages: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

App.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    lang: state.lang,
    languages: state.languages
  };
}

export default connect(mapStateToProps)(App);
