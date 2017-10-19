import React from 'react';
import { expect } from 'chai';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import ConnectedServicesPage, { ServicesPage } from './ServicesPage';

describe('Services Page', () => {
  const props = {
    'lang': { id: 'en-AU', name: 'English(AU)' }
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ServicesPage {...props}/>);
  });

  it("should be rendered", () => {
    expect(wrapper.find('.services')).to.have.length(1);
  });
  it("should display title", () => {
    expect(wrapper.find('.services__title')).to.have.length(1);
  });
});

describe('Connected Services Page', () => {
  const initialState = {
    'lang': { id: 'en-AU', name: 'English(AU)' }
  };
  const mockStore = configureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = mount(
      <Provider store={store}>
        <ConnectedServicesPage />
      </Provider>
    );
  });

  describe('Props', () => {
    it("should match initialState", () => {
      expect(container.find(ServicesPage).prop('lang')).to.equal(initialState.lang);
    });
  });
});
