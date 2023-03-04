// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUOnHpFs3xyRxAT4ZM_oTG1ZRs9jd2uW4",
  authDomain: "aut-react-rm.firebaseapp.com",
  projectId: "aut-react-rm",
  storageBucket: "aut-react-rm.appspot.com",
  messagingSenderId: "895561611870",
  appId: "1:895561611870:web:127d3a107415ec2e8d52cf",
  measurementId: "G-CKS2ZC7SLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebaseConfig