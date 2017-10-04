import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import t from './_lang.json';
import hero640 from './img/devops-640w.jpg';
import hero960 from './img/devops-960w.jpg';
import hero1280 from './img/devops-1280w.jpg';
import hero1920 from './img/devops-1920w.jpg';
import hero2560 from './img/devops-2560w.jpg';
import hero3840 from './img/devops-3840w.jpg';

export class DevOpsPage extends Component {
  render() {
    let { lang } = this.props;

    return (
      <div className="devops">
        <Helmet>
          <title>{t[lang.id].title}</title>
        </Helmet>
        <h1 className="devops__title">{t[lang.id].title}</h1>
        <div className="hero">
          <picture className="hero__img-div">
            <source media="(min-width: 2561px)" srcSet={`${hero3840}`} />
            <source media="(min-width: 1921px)" srcSet={`${hero2560}`} />
            <source media="(min-width: 1281px)" srcSet={`${hero1920}`} />
            <source media="(min-width: 961px)" srcSet={`${hero1280}`} />
            <source media="(min-width: 641px)" srcSet={`${hero960}`} />
            <img src={hero640} alt={t[lang.id].title} className="hero__image" />
          </picture>
          <div className="hero__txt-div">
            <h1 className="hero__title">{t[lang.id].title}</h1>
          </div>
        </div>
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
