// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCq7mgw1otLgobX2xqdLNVBZ_WjoGtIfuQ",
    authDomain: "test-project-dd6b6.firebaseapp.com",
    projectId: "test-project-dd6b6",
    storageBucket: "test-project-dd6b6.appspot.com",
    messagingSenderId: "351244186705",
    appId: "1:351244186705:web:13aa7105ab1ed8cdd1f470"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;