import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBPu65L88TeenfbRgESxP0sxQJDJyFNAmM",
  authDomain: "cart-ffe42.firebaseapp.com",
  projectId: "cart-ffe42",
  storageBucket: "cart-ffe42.appspot.com",
  messagingSenderId: "793423714291",
  appId: "1:793423714291:web:6350383e8415337f086486"
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);


export {firebaseApp, firestore};