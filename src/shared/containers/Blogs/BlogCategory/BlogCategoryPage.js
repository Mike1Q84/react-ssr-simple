import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
// import t from './_lang.json';

const BlogCategoryPage = () => {
  return (
    <div className="blog-category">
      <Helmet>
        <title>Blog Category Page</title>
      </Helmet>
      <h1 className="blog-category__title">Blog Category Page</h1>
    </div>
  );
};

// BlogCategoryPage.propTypes = {
//   lang: PropTypes.object.isRequired
// };

export default BlogCategoryPage;
