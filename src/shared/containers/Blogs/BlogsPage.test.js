import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { BlogsPage } from './BlogsPage';

describe('Blogs Page', () => {
  const props = {
    'url': 'en-AU/blog',
    'lang': { id: 'en-AU', name: 'English(AU)' }
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BlogsPage {...props}/>);
  });

  it("should be rendered", () => {
    expect(wrapper.find('.blogs')).to.have.length(1);
  });
  it("should display title", () => {
    expect(wrapper.find('.blogs__title')).to.have.length(1);
  });
});
