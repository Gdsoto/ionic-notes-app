// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBup49qpjZspWcaApIM5Amvvzw04RC2MGU',
	authDomain: 'notes-app-7a131.firebaseapp.com',
	projectId: 'notes-app-7a131',
	storageBucket: 'notes-app-7a131.appspot.com',
	messagingSenderId: '151548144423',
	appId: '1:151548144423:web:2fb497e6a7bf64e5955702',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
