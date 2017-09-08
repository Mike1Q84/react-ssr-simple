import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
  it("should be mounted", function() {
    expect(mount(<App />).find('.App').length).to.equal(1);
  });

  describe('Header', () => {
    it("should be mounted", function() {
      expect(mount(<App />).find('.header').length).to.equal(1);
    });
  });

  describe('HomePage', () => {
    it("should be mounted", function() {
      expect(mount(<App />).find('.home').length).to.equal(1);
    });
  });

  describe('Footer', () => {
    it("should be mounted", function() {
      expect(mount(<App />).find('.footer').length).to.equal(1);
    });
  });
});
