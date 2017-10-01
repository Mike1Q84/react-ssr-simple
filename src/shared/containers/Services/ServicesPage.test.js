import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { ServicesPage } from './ServicesPage';

describe('Services Page', () => {
  const props = {
    'lang': { id: 'en-AU', name: 'English(AU)' }
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ServicesPage {...props}/>);
  });

  it("should be rendered", () => {
    expect(wrapper.find('.services')).to.have.length(1);
  });
  it("should display title", () => {
    expect(wrapper.find('.services__title')).to.have.length(1);
  });
});
