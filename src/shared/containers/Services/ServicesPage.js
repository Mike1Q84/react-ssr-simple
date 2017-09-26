import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import t from './_lang.json';

import { Route } from 'react-router-dom';
import routes from './routes';

export class ServicesPage extends Component {
  render() {
    let { lang } = this.props;

    return (
      <div className="services">
        <Helmet>
          <title>{t[lang.id].title}</title>
        </Helmet>
        <h1 className="services__title">{t[lang.id].title}</h1>
        {routes.map((route, i) => <Route key={i} {...route}/>)}
      </div>
    )
  }
}

ServicesPage.propTypes = {
  lang: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    lang: state.lang
  };
}

export default connect(mapStateToProps)(ServicesPage);
