import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import t from './_lang.json';

class NotFoundPage extends Component {
  render() {
    let { lang } = this.props;

    return (
      <div className="not-found">
        <h1 className="not-found__title">{t[lang.id].name}</h1>
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
