import * as firebase from 'firebase';
import {firebaseKey} from '../apiKeys/firebaseKey'

const config = {
  apiKey: firebaseKey,
  authDomain: "crawl-for-the-kids.firebaseapp.com",
  databaseURL: "https://crawl-for-the-kids.firebaseio.com",
  projectId: "crawl-for-the-kids",
  storageBucket: "crawl-for-the-kids.appspot.com",
  messagingSenderId: "391756131034"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth
};