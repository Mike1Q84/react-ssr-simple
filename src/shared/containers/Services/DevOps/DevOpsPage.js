import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import t from './_lang.json';

export class DevOpsPage extends Component {
  render() {
    let { lang } = this.props;

    return (
      <div className="devops">
        <Helmet>
          <title>{t[lang.id].title}</title>
        </Helmet>
        <h1 className="devops__title">{t[lang.id].title}</h1>
      </div>
    )
  }
}

DevOpsPage.propTypes = {
  lang: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    lang: state.lang
  };
}

export default connect(mapStateToProps)(DevOpsPage);
