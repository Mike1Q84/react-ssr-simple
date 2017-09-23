import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  const props = {
    'lang': { id: 'en-AU', name: 'English(AU)' }
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer {...props}/>);
  });

  it("should be rendered", () => {
      expect(wrapper.find('.footer')).to.have.length(1);
  });
  it("should display title", () => {
    expect(wrapper.find('.footer__title')).to.have.length(1);
  });
});
