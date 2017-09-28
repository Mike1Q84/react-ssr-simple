import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import t from './_lang.json';

import BlogCategoryPage from './BlogCategory/BlogCategoryPage';
import BlogDetailPage from './BlogDetail/BlogDetailPage';

export class BlogsPage extends Component {
  render() {
    let { url, lang } = this.props;
    let n = url.lastIndexOf('/');
    let is404 = url.substring(n + 1) === '404';

    return (
      <div className="blogs">
        <Helmet>
          <title>{t[lang.id].title}</title>
        </Helmet>
        <h1 className="blogs__title">{t[lang.id].title}</h1>
        <Switch>
          <Route path='/:lang/blog'
            render={() => <BlogCategoryPage lang={lang} />} exact />
          <Route path='/:lang/blog/:entry'
            render={() => <BlogDetailPage lang={lang} />} />
        </Switch>
      </div>
    )
  }
}

BlogsPage.propTypes = {
  url: PropTypes.string.isRequired,
  lang: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    url: state.url,
    lang: state.lang
  };
}

export default connect(mapStateToProps)(BlogsPage);
