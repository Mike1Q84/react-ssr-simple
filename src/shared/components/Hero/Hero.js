import React from 'react';
import PropTypes from 'prop-types';
import './Hero.sass';

const Hero = ({lang, title,
  hero640, hero960, hero1280, hero1920, hero2560, hero3840}) => {
  return (
    <div className="hero">
      <picture className="hero__img-div">
        <source media="(min-width: 2561px)" srcSet={`${hero3840}`} />
        <source media="(min-width: 1921px)" srcSet={`${hero2560}`} />
        <source media="(min-width: 1281px)" srcSet={`${hero1920}`} />
        <source media="(min-width: 961px)" srcSet={`${hero1280}`} />
        <source media="(min-width: 641px)" srcSet={`${hero960}`} />
        <img src={hero640} alt={title} className="hero__image" />
      </picture>
      <div className="hero__txt-div">
        <h1 className="hero__title">{title}</h1>
      </div>
    </div>
  );
};

Hero.propTypes = {
  lang: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  hero640: PropTypes.string.isRequired,
  hero960: PropTypes.string.isRequired,
  hero1280: PropTypes.string.isRequired,
  hero1920: PropTypes.string.isRequired,
  hero2560: PropTypes.string.isRequired,
  hero3840: PropTypes.string.isRequired
};

export default Hero;
