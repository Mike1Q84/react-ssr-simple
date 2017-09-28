import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import BlogDetailPage from './BlogDetailPage';

describe('Blog Category Page', () => {
  const props = {
    'lang': { id: 'en-AU', name: 'English(AU)' }
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BlogDetailPage {...props}/>);
  });

  it("should be rendered", () => {
      expect(wrapper.find('.blog-detail')).to.have.length(1);
  });
  it("should display title", () => {
    expect(wrapper.find('.blog-detail__title')).to.have.length(1);
  });
});
