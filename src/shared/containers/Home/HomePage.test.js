import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

describe('HomePage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomePage />);
  });

  it("should be rendered", () => {
      expect(wrapper.find('.home')).to.have.length(1);
  });
  it("should display title", () => {
      expect(wrapper.find('.home__title')).to.have.length(1);
  });
});
