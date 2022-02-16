import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCJPF5GJoN1LPa1ZCVFCcckAtc_KIMoCbw",
    authDomain: "shopping-cart-aa360.firebaseapp.com",
    projectId: "shopping-cart-aa360",
    storageBucket: "shopping-cart-aa360.appspot.com",
    messagingSenderId: "693103155024",
    appId: "1:693103155024:web:bdcf49f670d7738b5d3e55"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
