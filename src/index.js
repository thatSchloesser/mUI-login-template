import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase/app';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';

import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
const ui = new firebaseui.auth.AuthUI(firebase.auth());

ReactDOM.render(
  <React.StrictMode>
    <App ui={ui} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
