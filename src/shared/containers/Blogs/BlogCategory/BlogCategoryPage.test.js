import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import BlogCategoryPage from './BlogCategoryPage';

describe('Blog Category Page', () => {
  const props = {
    'lang': { id: 'en-AU', name: 'English(AU)' }
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BlogCategoryPage {...props}/>);
  });

  it("should be rendered", () => {
      expect(wrapper.find('.blog-category')).to.have.length(1);
  });
  it("should display title", () => {
    expect(wrapper.find('.blog-category__title')).to.have.length(1);
  });
});
