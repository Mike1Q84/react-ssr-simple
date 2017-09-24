import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import t from './_lang.json';

export class NotFoundPage extends Component {
  render() {
    let { lang } = this.props;

    return (
      <div className="not-found">
        <Helmet>
          <title>{t[lang.id].title}</title>
        </Helmet>
        <h1 className="not-found__title">{t[lang.id].title}</h1>
      </div>
    )
  }
}

NotFoundPage.propTypes = {
  lang: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    lang: state.lang
  };
}

export default connect(mapStateToProps)(NotFoundPage);
