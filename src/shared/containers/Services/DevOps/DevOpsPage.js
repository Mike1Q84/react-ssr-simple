import React from 'react';
import PropTypes from 'prop-types';
// import t from './_lang.json';

const DevOpsPage = ({lang}) => {
  return (
    <div className="devops">
      {/* <h1 className="footer__title">{t[lang.id].name}</h1> */}
      <h1 className="devops__title">DevOps Page</h1>
    </div>
  );
};

DevOpsPage.propTypes = {
  lang: PropTypes.object.isRequired
};

export default DevOpsPage;
