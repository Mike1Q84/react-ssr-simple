import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import HomePage from './containers/Home/HomePage';
// import AboutPage from './containers/About/AboutPage';
// import NotFoundPage from './containers/404/NotFoundPage';
import routes from './routes';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadLang, loadLanguages } from '../actions/languageActions';

class App extends Component {
  static initLang(lang) {
    return loadLang(lang);
  }
  static initLanguages() {
    return loadLanguages();
  }

  // componentWillMount() {
  //   if (this.props.noLang) {
  //     this.props.history.push('/en-AU/404');
  //   }
  // }

  componentDidMount() {
    if (!this.props.languages) {
      this.props.dispatch(App.initLanguages());
    }
    // console.log(window.location.pathname);
  }

  render() {
    return (
      <div className="App">
        <Header lang={this.props.lang} languages={this.props.languages} />
        <Switch>
          {routes.map((route, i) => <Route key={i} {...route} />)}
          {/* <Route path="/" component={HomePage} exact />
          <Route path="/:lang/" component={HomePage} exact />
          <Route path="/:lang/home" component={HomePage} exact />
          <Route path="/:lang/about" component={AboutPage} exact />
          <Route path="/:lang/404" component={NotFoundPage} />
          <Route path="*" component={NotFoundPage} /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  // history: PropTypes.object.isRequired,
  // noLang: PropTypes.bool.isRequired,
  lang: PropTypes.object.isRequired,
  languages: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

App.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    noLang: state.noLang,
    lang: state.lang,
    languages: state.languages
  };
}

export default connect(mapStateToProps)(App);
// export default withRouter(connect(mapStateToProps)(App));
