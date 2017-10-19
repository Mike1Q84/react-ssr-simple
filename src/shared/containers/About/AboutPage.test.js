import React from 'react';
import { expect } from 'chai';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import ConnectedAboutPage, { AboutPage } from './AboutPage';
import t from './_lang.json';

describe('AboutPage', () => {
  const props = {
    'lang': { id: 'en-AU', name: 'English(AU)' }
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AboutPage {...props}/>);
  });

  it("should be rendered", () => {
    expect(wrapper.find('.about')).to.have.length(1);
  });
  it("should display title", () => {
    expect(wrapper.find('.about__title').text()).to.equal(t[props.lang.id].title);
  });
});

describe('Connected About Page', () => {
  const initialState = {
    'lang': { id: 'en-AU', name: 'English(AU)' }
  };
  const mockStore = configureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = mount(
      <Provider store={store}>
        <ConnectedAboutPage />
      </Provider>
    );
  });

  describe('Props', () => {
    it("should match initialState", () => {
      expect(container.find(AboutPage).prop('lang')).to.equal(initialState.lang);
    });
  });
});
