import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
// import t from './_lang.json';

const BlogDetailPage = () => {
  return (
    <div className="blog-detail">
      <Helmet>
        <title>Blog Detail Page</title>
      </Helmet>
      <h1 className="blog-detail__title">Blog Detail Page</h1>
    </div>
  );
};

// BlogDetailPage.propTypes = {
//   lang: PropTypes.object.isRequired
// };

export default BlogDetailPage;
