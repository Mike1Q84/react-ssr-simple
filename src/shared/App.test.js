import React from 'react';
import { expect } from 'chai';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from "react-redux";
// import configureStore from "../store/configureStore";
// const store = configureStore(window.__initialData__);


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

// describe('App', () => {
//   const props = {
//     'url': '/en-AU/home',
//     'history': {
//       'push': () => {return null;}
//     },
//     'noLang': false,
//     'lang': { id: 'en-AU', name: 'English(AU)' },
//     'languages': [
//       { id: 'en-AU', name: 'English(AU)' },
//       { id: 'zh-CN', name: '中文（简体）' }
//     ],
//     'dispatch': () => {return null;}
//   };
//
//   let wrapper;
//
//   beforeEach(() => {
//     wrapper = mount(
//       // <Provider store={store}>
//       //   <BrowserRouter>
//           <App {...props}/>
//       //   </BrowserRouter>
//       // </Provider>
//     );
//   });
//
//   it("should be rendered", () => {
//     expect(wrapper.find('.App')).to.have.length(1);
//   });
// });
