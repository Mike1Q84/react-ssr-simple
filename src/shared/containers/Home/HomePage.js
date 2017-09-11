import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import './HomePage.sass';

class HomePage extends Component {
  render() {
    // let { lang } = this.props;

    return (
      <div className="home">
        <h1 className="home__title">Home Page</h1>
      </div>
    );
  }
}

// HomePage.propTypes = {
//   lang: PropTypes.string.isRequired
// };
//
// function mapStateToProps(state) {
//   return {
//     lang: state.lang
//   };
// }
//
// export default connect(mapStateToProps)(HomePage);
export default HomePage;
