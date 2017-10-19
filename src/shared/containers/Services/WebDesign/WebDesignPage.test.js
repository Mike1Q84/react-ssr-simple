import React from 'react';
import { expect } from 'chai';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import ConnectedWebDesignPage, { WebDesignPage } from './WebDesignPage';
import t from './_lang.json';

describe('WebDesign Page', () => {
  const props = {
    'lang': { id: 'en-AU', name: 'English(AU)' }
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WebDesignPage {...props}/>);
  });

  it("should be rendered", () => {
    expect(wrapper.find('.webdesign')).to.have.length(1);
  });
});

describe('Connected WebDesign Page', () => {
  const initialState = {
    'lang': { id: 'en-AU', name: 'English(AU)' }
  };
  const mockStore = configureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = mount(
      <Provider store={store}>
        <ConnectedWebDesignPage />
      </Provider>
    );
  });

  describe('Props', () => {
    it("should match initialState", () => {
      expect(container.find(WebDesignPage).prop('lang')).to.equal(initialState.lang);
    });
  });
});

describe('WebDesign Page Hero', () => {
  const props = {
    'lang': { id: 'en-AU', name: 'English(AU)' },
    'title': 'Test Service',
    // 'hero640': './img/test-640w.jpg',
    // 'hero960': './img/test-960w.jpg',
    // 'hero1280': './img/test-1280w.jpg',
    // 'hero1920': './img/test-1920w.jpg',
    // 'hero2560': './img/test-2560w.jpg',
    // 'hero3840': './img/test-3840w.jpg'
  };

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<WebDesignPage {...props}/>);
  });

  it("should be mounted", () => {
    expect(wrapper.find('.hero')).to.have.length(1);
  });
  it("should display title", () => {
    expect(wrapper.find('.hero__title').text()).to.equal(t[props.lang.id].title);
  });
});
