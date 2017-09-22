import React from 'react';
import PropTypes from 'prop-types';
import t from './_lang.json';

const Footer = ({lang}) => {
  return (
    <div className="footer">
      <h1 className="footer__title">{t[lang.id].name}</h1>
    </div>
  );
};

Footer.propTypes = {
  lang: PropTypes.object.isRequired
};

export default Footer;
