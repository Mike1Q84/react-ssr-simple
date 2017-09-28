import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import t from './_lang.json';

const BlogDetailPage = ({lang}) => {
  return (
    <div className="blog-detail">
      <Helmet>
        <title>{t[lang.id].title}</title>
      </Helmet>
      <h1 className="blog-detail__title">{t[lang.id].title}</h1>
    </div>
  );
};

BlogDetailPage.propTypes = {
  lang: PropTypes.object.isRequired
};

export default BlogDetailPage;
