import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  const props = {
    'lang': { id: 'en-AU', name: 'English(AU)' },
    'languages': [
      { id: 'en-AU', name: 'English(AU)' },
      { id: 'zh-CN', name: '中文（简体）' }
    ]
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header {...props} />);
  });

  it("should be rendered", () => {
    expect(wrapper.find('.header')).to.have.length(1);
  });
  it("should display title", () => {
    expect(wrapper.find('.header__title')).to.have.length(1);
  });
  it("should display language", () => {
    expect(wrapper.find('.header__lang')).to.have.length(1);
  });
});
