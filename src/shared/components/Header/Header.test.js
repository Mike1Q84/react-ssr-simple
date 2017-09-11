import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it("should be rendered", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.header')).to.have.length(1);
  });
  it("should display title", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.header__title')).to.have.length(1);
  });
  it("should display language", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.header__lang')).to.have.length(1);
  });
});
