import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import t from './_lang.json';

const BlogCategoryPage = ({lang}) => {
  return (
    <div className="blog-category">
      <Helmet>
        <title>{t[lang.id].title}</title>
      </Helmet>
      <h1 className="blog-category__title">{t[lang.id].title}</h1>
    </div>
  );
};

BlogCategoryPage.propTypes = {
  lang: PropTypes.object.isRequired
};

export default BlogCategoryPage;
