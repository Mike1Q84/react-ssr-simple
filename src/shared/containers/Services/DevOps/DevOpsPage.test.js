import React from 'react';
import { expect } from 'chai';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import ConnectedDevOpsPage, { DevOpsPage } from './DevOpsPage';
import t from './_lang.json';

describe('DevOps Page', () => {
  const props = {
    'lang': { id: 'en-AU', name: 'English(AU)' }
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DevOpsPage {...props}/>);
  });

  it("should be rendered", () => {
    expect(wrapper.find('.devops')).to.have.length(1);
  });
});

describe('Connected DevOps Page', () => {
  const initialState = {
    'lang': { id: 'en-AU', name: 'English(AU)' }
  };
  const mockStore = configureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = mount(
      <Provider store={store}>
        <ConnectedDevOpsPage />
      </Provider>
    );
  });

  describe('Props', () => {
    it("should match initialState", () => {
      expect(container.find(DevOpsPage).prop('lang')).to.equal(initialState.lang);
    });
  });
});

describe('DevOps Page Hero', () => {
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
    wrapper = mount(<DevOpsPage {...props}/>);
  });

  it("should be mounted", () => {
    expect(wrapper.find('.hero')).to.have.length(1);
  });
  it("should display title", () => {
    expect(wrapper.find('.hero__title').text()).to.equal(t[props.lang.id].title);
  });
});
