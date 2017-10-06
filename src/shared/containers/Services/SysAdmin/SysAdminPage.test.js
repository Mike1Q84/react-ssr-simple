import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { SysAdminPage } from './SysAdminPage';

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
  it("should display title", () => {
    expect(wrapper.find('.sysadmin__title')).to.have.length(1);
  });
});
