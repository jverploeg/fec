import ReactDOM from 'react-dom';
import React from 'react';
import App from './js/App';

require('./css/mystyles.scss');

ReactDOM.render(
  <App />,
  document.getElementById('app'));


if(module.hot) // eslint-disable-line no-undef
  module.hot.accept() // eslint-disable-line no-undef
