import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

describe('HomePage', () => {
  it("should be rendered", function() {
      const wrapper = shallow(<HomePage />);
      expect(wrapper.find('.home')).to.have.length(1);
  });
  it("should display title", function() {
      const wrapper = shallow(<HomePage />);
      expect(wrapper.find('.home__title')).to.have.length(1);
  });
});
