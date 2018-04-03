import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/Main';

import { Provider } from 'react-redux';

import store from './stores/index';
import MainElement from './containers/index';

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));


ReactDOM.render (
  <Provider store={ store }>
    <MainElement />
  </Provider>,
  document.getElementById('app')
);
