/*
const firebaseConfig = {
  apiKey: "AIzaSyDIOuQjSEqfpdO1s-23xIJ2TDdE5S8332s",
  authDomain: "hangout-tour-site.firebaseapp.com",
  projectId: "hangout-tour-site",
  storageBucket: "hangout-tour-site.appspot.com",
  messagingSenderId: "35908053088",
  appId: "1:35908053088:web:056358f326415512f7fb05"
};
export default firebaseConfig;*/



const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
     projectId: process.env.REACT_APP_PROJECT_ID,
     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_APP_ID,
    };
 
  export default firebaseConfig;
