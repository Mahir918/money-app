import React from 'react';
import ReactDOM from 'react-dom';
import jwtDecode from 'jwt-decode'
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from './store'
import * as Types from './store/actions/types'
import setHeader from './utils/setAuth'

const token = localStorage.getItem('token')
if(token){
  let decode = jwtDecode(token)
  setHeader(token)
  store.dispatch({
    type: Types.SET_USER,
    payload:{
      user:decode
    }
  })
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
