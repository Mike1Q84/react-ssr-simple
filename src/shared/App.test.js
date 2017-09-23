import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {
  const props = {
    'url': '/en-AU/home',
    'history': {
      'push': () => {return null;}
    },
    'noLang': false,
    'lang': { id: 'en-AU', name: 'English(AU)' },
    'languages': [
      { id: 'en-AU', name: 'English(AU)' },
      { id: 'zh-CN', name: '中文（简体）' }
    ],
    'dispatch': () => {return null;}
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App {...props}/>);
  });

  it("should be rendered", () => {
      expect(wrapper.find('.App')).to.have.length(1);
  });
});
