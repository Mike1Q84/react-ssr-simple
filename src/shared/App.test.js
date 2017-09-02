import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
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
