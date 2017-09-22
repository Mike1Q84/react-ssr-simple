import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import routes from './routes';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadUrl } from '../actions/urlActions';
import { loadLang, loadLanguages } from '../actions/languageActions';

class App extends Component {
  static initUrl(url) {
    return loadUrl(url);
  }
  static initLang(lang) {
    return loadLang(lang);
  }
  static initLanguages() {
    return loadLanguages();
  }

  componentWillMount() {
    // Change client-side url to match node processed server-side url
    this.props.history.push(this.props.url);
  }

  componentDidMount() {
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
        <Footer lang={this.props.lang} />
      </div>
    );
  }
}

App.propTypes = {
  url: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  noLang: PropTypes.bool.isRequired,
  lang: PropTypes.object.isRequired,
  languages: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    url: state.url,
    noLang: state.noLang,
    lang: state.lang,
    languages: state.languages
  };
}

export default withRouter(connect(mapStateToProps)(App));
