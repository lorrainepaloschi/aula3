// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbLs1oj190AEBJMamCwKkrj-BUXfac1u4",
  authDomain: "gymtracker-5ba73.firebaseapp.com",
  projectId: "gymtracker-5ba73",
  storageBucket: "gymtracker-5ba73.appspot.com",
  messagingSenderId: "614743479653",
  appId: "1:614743479653:web:cc513513d3f9107bb17d8c",
  measurementId: "G-LPK5L1KLE2"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const auth = firebase.auth();
export { auth };
