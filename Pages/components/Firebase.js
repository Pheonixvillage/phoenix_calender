import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAM7vl7ozWbG5MG1Jye8_4rqErpR58r_UM",
    authDomain: "daylit-476ce.firebaseapp.com",
    projectId: "daylit-476ce",
    storageBucket: "daylit-476ce.appspot.com",
    messagingSenderId: "1013357127553",
    appId: "1:1013357127553:web:99fa64f21245cd49242a80",
    measurementId: "G-5LTQCLLEV0"
};
export default firebase.initializeApp(firebaseConfig);