import React from 'react';
import { expect } from 'chai';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import ConnectedApp, { App } from './App';

describe('App', () => {
  const props = {
    'url': '/en-AU/home',
    'history': {
      'push': () => {return null;}
    },
    'noLang': false,
    'lang': { id: 'en-AU', name: 'English(AU)' },
    'languages': [
      { id: 'en-AU', name: 'English(AU)' },
      { id: 'zh-CN', name: '中文（简体）' }
    ],
    'dispatch': () => {return null;}
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App {...props}/>);
  });

  it("should be rendered", () => {
    expect(wrapper.find('.App')).to.have.length(1);
  });
});

describe('App', () => {
  const initialState = {
    'url': '/en-AU/home',
    'history': {
      'push': () => {return null;}
    },
    'noLang': false,
    'lang': { id: 'en-AU', name: 'English(AU)' },
    'languages': [
      { id: 'en-AU', name: 'English(AU)' },
      { id: 'zh-CN', name: '中文（简体）' }
    ],
    'dispatch': () => {return null;}
  };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <App {...initialState} />
          {/* <ConnectedApp /> */}
        </BrowserRouter>
      </Provider>
    );
  });

  describe('Props', () => {
    it("should match initialState", () => {
      expect(wrapper.find(App).prop('url')).to.equal(initialState.url);
      expect(wrapper.find(App).prop('noLang')).to.equal(initialState.noLang);
      expect(wrapper.find(App).prop('lang')).to.equal(initialState.lang);
      expect(wrapper.find(App).prop('languages')).to.equal(initialState.languages);
    });
  });

  describe('Header', () => {
    it("should be mounted", () => {
      expect(wrapper.find('.header')).to.have.length(1);
    });
    it("should display title", () => {
      expect(wrapper.find('.header__title')).to.have.length(1);
    });
  });

  describe('Footer', () => {
    it("should be mounted", () => {
      expect(wrapper.find('.footer')).to.have.length(1);
    });
    it("should display title", () => {
      expect(wrapper.find('.footer__title')).to.have.length(1);
    });
  });

});
