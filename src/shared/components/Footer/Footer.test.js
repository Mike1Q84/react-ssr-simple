import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  it("should be rendered", function() {
      const wrapper = shallow(<Footer />);
      expect(wrapper.find('.footer')).to.have.length(1);
  });
});
