import 'firebase/compat/database'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import firebase from 'firebase/compat/app';
import { firebaseReducer } from 'react-redux-firebase'
import { reducer as formReducer } from 'redux-form'

const rrfConfig = {
  userProfile: 'users',
}

const firebaseConfig = {
  apiKey: "AIzaSyAXan8dtG9HVNb8waseTvh-571-0kWJwj0",
  authDomain: "air-master-kyiv.firebaseapp.com",
  databaseURL: "https://air-master-kyiv-default-rtdb.firebaseio.com",
  projectId: "air-master-kyiv",
  storageBucket: "air-master-kyiv.appspot.com",
  messagingSenderId: "633124808159",
  appId: "1:633124808159:web:5b256f04143ecac893106a",
  measurementId: "G-PM13VXQYWL"
};

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  form: formReducer
})


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})


firebase.initializeApp(firebaseConfig)
firebase.database()
firebase.storage(); 

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
}

