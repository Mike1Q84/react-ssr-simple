import React from 'react';
import PropTypes from 'prop-types';
// import t from './_lang.json';

const SysAdminPage = ({lang}) => {
  return (
    <div className="sysadmin">
      {/* <h1 className="footer__title">{t[lang.id].name}</h1> */}
      <h1 className="sysadmin__title">SysAdmin Page</h1>
    </div>
  );
};

SysAdminPage.propTypes = {
  lang: PropTypes.object.isRequired
};

export default SysAdminPage;
