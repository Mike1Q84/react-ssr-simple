import React from 'react';
import { expect } from 'chai';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import ConnectedHomePage, { HomePage } from './HomePage';

describe('Home Page', () => {
  const props = {
    'lang': { id: 'en-AU', name: 'English(AU)' }
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomePage {...props}/>);
  });

  it("should be rendered", () => {
    expect(wrapper.find('.home')).to.have.length(1);
  });
  it("should display title", () => {
    expect(wrapper.find('.home__title')).to.have.length(1);
  });
});

describe('Connected Home Page', () => {
  const initialState = {
    'lang': { id: 'en-AU', name: 'English(AU)' }
  };
  const mockStore = configureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    // Method 1: Passing the store directly and shallow render
    // container = shallow(<ConnectedHomePage store={store} />);
    // Method 2: Wrapping the connected component in <Provider> and full render
    container = mount(
      <Provider store={store}>
        <ConnectedHomePage />
      </Provider>
    );
  });

  describe('Props', () => {
    it("should match initialState", () => {
      // Method 1: Passing the store directly and shallow render
      // expect(container.prop('lang')).to.equal(initialState.lang);
      // Method 2: Wrapping the connected component in <Provider> and full render
      expect(container.find(HomePage).prop('lang')).to.equal(initialState.lang);
    });
  });
});
