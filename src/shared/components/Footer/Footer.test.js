import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Footer from './Footer';

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
    expect(wrapper.find('.footer__title')).to.have.length(1);
  });
});
