import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { NotFoundPage } from './NotFoundPage';
import t from './_lang.json';

describe('NotFoundPage', () => {
  const props = {
    'lang': { id: 'en-AU', name: 'English(AU)' }
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NotFoundPage {...props}/>);
  });

  it("should be rendered", () => {
    expect(wrapper.find('.not-found')).to.have.length(1);
  });
  it("should display title", () => {
    expect(wrapper.find('.not-found__title').text()).to.equal(t[props.lang.id].title);
  });
});
