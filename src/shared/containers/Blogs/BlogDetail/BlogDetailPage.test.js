import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import BlogDetailPage from './BlogDetailPage';
import t from './_lang.json';

describe('Blog Detail Page', () => {
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
    expect(wrapper.find('.blog-detail__title').text())
      .to.equal(t[props.lang.id].title);
  });
});
