// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw6WEGGLRYhr_GfPMZosdMflJhVDAe6K4",
  authDomain: "fireblogs-74ec2.firebaseapp.com",
  projectId: "fireblogs-74ec2",
  storageBucket: "fireblogs-74ec2.appspot.com",
  messagingSenderId: "150245121412",
  appId: "1:150245121412:web:695bf0e1fa5bbe631f11d1",
  measurementId: "G-THJE4HMPH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };
