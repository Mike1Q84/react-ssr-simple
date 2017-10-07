import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import t from './_lang.json';
import hero640 from './img/sysadmin-640w.jpg';
import hero960 from './img/sysadmin-960w.jpg';
import hero1280 from './img/sysadmin-1280w.jpg';
import hero1920 from './img/sysadmin-1920w.jpg';
import hero2560 from './img/sysadmin-2560w.jpg';
import hero3840 from './img/sysadmin-3840w.jpg';

import Hero from '../../../components/Hero/Hero';

export class SysAdminPage extends Component {
  render() {
    let { lang } = this.props;

    return (
      <div className="sysadmin">
        <Helmet>
          <title>{t[lang.id].title}</title>
        </Helmet>
        <Hero lang={lang} title={t[lang.id].title}
          hero640={hero640} hero960={hero960} hero1280={hero1280}
          hero1920={hero1920} hero2560={hero2560} hero3840={hero3840}>
        </Hero>
      </div>
    )
  }
}

SysAdminPage.propTypes = {
  lang: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    lang: state.lang
  };
}

export default connect(mapStateToProps)(SysAdminPage);
