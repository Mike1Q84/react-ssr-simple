import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NotFoundPage />);
  });

  it("should be rendered", () => {
      expect(wrapper.find('.not-found')).to.have.length(1);
  });
  it("should display title", () => {
      expect(wrapper.find('.not-found__title')).to.have.length(1);
  });
});
