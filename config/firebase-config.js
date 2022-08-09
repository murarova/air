import firebase from 'firebase/compat/app';
import 'firebase/compat/database'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { configureStore } from '@reduxjs/toolkit'
import { firebaseReducer } from 'react-redux-firebase'

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

export const store = configureStore({
  reducer: firebaseReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})


firebase.initializeApp(firebaseConfig)
firebase.database()

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
}

