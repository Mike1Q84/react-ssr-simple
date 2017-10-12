import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Footer from './Footer';
import t from './_lang.json';

describe('Footer', () => {
  const props = {
    'lang': { id: 'en-AU', name: 'English(AU)' }
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer {...props}/>);
  });

  it("should be rendered", () => {
    expect(wrapper.find('.footer')).to.have.length(1);
  });
  it("should display title", () => {
    expect(wrapper.find('.footer__title').text()).to.equal(t[props.lang.id].name);
  });
});
