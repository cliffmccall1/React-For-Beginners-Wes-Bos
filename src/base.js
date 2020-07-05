import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCDG--MCZ80o9Ipztaa7jDLLgYOT7G9oj0",
    authDomain: "catch-of-the-day-cliff.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-cliff.firebaseio.com",
  })

  const base = Rebase.createClass(firebaseApp.database());

  export { firebaseApp }

  export default base;