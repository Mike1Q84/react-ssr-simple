import React from 'react';
import PropTypes from 'prop-types';

const Header = ({lang}) => {
  return (
    <div className="header">
      <h1 className="header__title">Header</h1>
      <p className="header__lang">LANG: {lang}</p>
    </div>
  );
};

Header.propTypes = {
  lang: PropTypes.string.isRequired
};

export default Header;
