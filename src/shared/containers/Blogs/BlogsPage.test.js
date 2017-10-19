import React from 'react';
import { expect } from 'chai';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import ConnectedBlogsPage, { BlogsPage } from './BlogsPage';
import t from './_lang.json';

describe('Blogs Page', () => {
  const props = {
    'url': 'en-AU/blog',
    'lang': { id: 'en-AU', name: 'English(AU)' }
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BlogsPage {...props}/>);
  });

  it("should be rendered", () => {
    expect(wrapper.find('.blogs')).to.have.length(1);
  });
  it("should display title", () => {
    expect(wrapper.find('.blogs__title').text()).to.equal(t[props.lang.id].title);
  });
});

describe('Connected Blogs Page', () => {
  const initialState = {
    'url': '/en-AU/blog',
    'lang': { id: 'en-AU', name: 'English(AU)' }
  };
  const mockStore = configureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ConnectedBlogsPage />
        </BrowserRouter>
      </Provider>
    );
  });

  describe('Props', () => {
    it("should match initialState", () => {
      expect(container.find(BlogsPage).prop('url')).to.equal(initialState.url);
      expect(container.find(BlogsPage).prop('lang')).to.equal(initialState.lang);
    });
  });
});
