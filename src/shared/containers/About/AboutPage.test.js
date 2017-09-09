import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it("should be rendered", function() {
      const wrapper = shallow(<AboutPage />);
      expect(wrapper.find('.about')).to.have.length(1);
  });
});
