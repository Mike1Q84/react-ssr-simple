import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import t from './_lang.json';

export class AboutPage extends Component {
  render() {
    let { lang } = this.props;

    return (
      <div className="about">
        <h1 className="about__title">{t[lang.id].name}</h1>
      </div>
    )
  }
}

AboutPage.propTypes = {
  lang: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    lang: state.lang
  };
}

export default connect(mapStateToProps)(AboutPage);
