import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
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
