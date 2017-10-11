import React from 'react';
import { expect } from 'chai';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { SysAdminPage } from './SysAdminPage';
import t from './_lang.json';

describe('SysAdmin Page', () => {
  const props = {
    'lang': { id: 'en-AU', name: 'English(AU)' }
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SysAdminPage {...props}/>);
  });

  it("should be rendered", () => {
    expect(wrapper.find('.sysadmin')).to.have.length(1);
  });
});

describe('SysAdmin Page Hero', () => {
  const props = {
    'lang': { id: 'en-AU', name: 'English(AU)' },
    'title': 'Test Service',
    'hero640': './img/test-640w.jpg',
    'hero960': './img/test-960w.jpg',
    'hero1280': './img/test-1280w.jpg',
    'hero1920': './img/test-1920w.jpg',
    'hero2560': './img/test-2560w.jpg',
    'hero3840': './img/test-3840w.jpg'
  };

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<SysAdminPage {...props}/>);
  });

  it("should be mounted", () => {
    expect(wrapper.find('.hero')).to.have.length(1);
  });
  it("should display title", () => {
    expect(wrapper.find('.hero__title').text()).to.equal(t[props.lang.id].title);
  });
});
