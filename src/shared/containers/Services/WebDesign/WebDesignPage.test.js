import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { WebDesignPage } from './WebDesignPage';

describe('WebDesign Page', () => {
  const props = {
    'lang': { id: 'en-AU', name: 'English(AU)' }
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WebDesignPage {...props}/>);
  });

  it("should be rendered", () => {
    expect(wrapper.find('.webdesign')).to.have.length(1);
  });
  it("should display title", () => {
    expect(wrapper.find('.webdesign__title')).to.have.length(1);
  });
});
