import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AboutPage />);
  });

  it("should be rendered", () => {
      expect(wrapper.find('.about')).to.have.length(1);
  });
  it("should display title", () => {
      expect(wrapper.find('.about__title')).to.have.length(1);
  });
});
