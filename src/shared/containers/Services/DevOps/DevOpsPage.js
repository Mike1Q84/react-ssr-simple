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
        <picture>
          <source media="(min-width: 1281px)"
            srcSet={`${hero1920} 1920w, ${hero3840} 3840w`} />
          <source media="(min-width: 961px)"
            srcSet={`${hero1280} 1280w, ${hero2560} 2560w`} />
          <source media="(min-width: 641px)"
            srcSet={`${hero960} 960w, ${hero1920} 1920w`} />
          <source media="(min-width: 1px)" srcSet={`${hero640} 640w`}/>
          <img src={hero3840} alt="DevOps" />
        </picture>
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
