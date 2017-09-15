import React from 'react';
import PropTypes from 'prop-types';

const Header = ({lang, languages}) => {
  return (
    <div className="header">
      <h1 className="header__title">Header</h1>
      <p className="header__lang">LANG: {lang.name}</p>
      <ul className="lang-list">
        {languages.map(language => {
          return (
            <li className="lang-list__item" key={language.id}>{language.name}</li>
          );
        })}
      </ul>
    </div>
  );
};

Header.propTypes = {
  lang: PropTypes.object.isRequired,
  languages: PropTypes.array.isRequired
};

export default Header;
