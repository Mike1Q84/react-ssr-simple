import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it("should be rendered", function() {
      const wrapper = shallow(<Header />);
      expect(wrapper.find('.header')).to.have.length(1);
  });
});
