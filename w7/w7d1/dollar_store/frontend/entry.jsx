import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './components/widget';
import store from './store';
// import selectCurrency from './actions';
// import reducer from './reducer';

// window.selectCurrency = selectCurrency;

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Widget store={store} />, document.getElementById('root'));
});
