import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { DevOpsPage } from './DevOpsPage';

describe('DevOps Page', () => {
  const props = {
    'lang': { id: 'en-AU', name: 'English(AU)' }
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DevOpsPage {...props}/>);
  });

  it("should be rendered", () => {
    expect(wrapper.find('.devops')).to.have.length(1);
  });
  it("should display title", () => {
    expect(wrapper.find('.devops__title')).to.have.length(1);
  });
});
