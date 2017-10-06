import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { AboutPage } from './AboutPage';

describe('AboutPage', () => {
  const props = {
    'lang': { id: 'en-AU', name: 'English(AU)' }
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AboutPage {...props}/>);
  });

  it("should be rendered", () => {
      expect(wrapper.find('.about')).to.have.length(1);
  });
  it("should display title", () => {
      expect(wrapper.find('.about__title')).to.have.length(1);
  });
});
