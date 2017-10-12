import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { BlogsPage } from './BlogsPage';
import t from './_lang.json';

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
    expect(wrapper.find('.blogs__title').text()).to.equal(t[props.lang.id].title);
  });
});
