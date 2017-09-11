import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';

import { Provider } from "react-redux";
import configureStore from "../store/configureStore";

const store = configureStore(window.__initialData__);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
