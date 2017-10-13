import React from 'react';
import PropTypes from 'prop-types';
import t from './_lang.json';
import { Link } from 'react-router-dom'

import './Header.sass';

const Header = ({lang, languages}) => {
  return (
    <div className="header">
      <h1 className="header__title">{t[lang.id].name}</h1>
      <nav className="navbar">
        <ul className="navlink">
          <li className="navlink__item">
            <Link to={`/${lang.id}/${t[lang.id].nav.home.id}`}>
              {t[lang.id].nav.home.name}
            </Link>
          </li>
          <li className="navlink__item">
            <Link to={`/${lang.id}/${t[lang.id].nav.about.id}`}>
              {t[lang.id].nav.about.name}
            </Link>
          </li>
        </ul>
      </nav>
      <p className="header__lang">{t[lang.id].lang}: {lang.name}</p>
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
