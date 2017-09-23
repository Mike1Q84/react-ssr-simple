import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { HomePage } from './HomePage';

describe('HomePage', () => {
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
