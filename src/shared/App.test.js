import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {
  it("should be mounted", function() {
    expect(mount(<App />).find('.App').length).to.equal(1);
  });

  describe('Header', () => {
    it('renders 1 header', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('.header')).to.have.length(1);
    });
    it('renders 1 header__title', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('.header__title')).to.have.length(1);
    });
  });
  describe('Body', () => {
    it('renders 1 body', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('.body')).to.have.length(1);
    });
    it('renders 1 body__title', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('.body__title')).to.have.length(1);
    });
  });
  describe('Footer', () => {
    it('renders 1 footer', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('.footer')).to.have.length(1);
    });
    it('renders 1 footer__title', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('.footer__title')).to.have.length(1);
    });
  });
});
