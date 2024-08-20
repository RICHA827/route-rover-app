// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK4gEIC8gQfww8zg3uKh3r1susPoOvsKg",
  authDomain: "route-rover-3ce52.firebaseapp.com",
  projectId: "route-rover-3ce52",
  storageBucket: "route-rover-3ce52.appspot.com",
  messagingSenderId: "202124967916",
  appId: "1:202124967916:web:64ec72fc46f40d3d7f0ac9",
  measurementId: "G-5CLW7X9YPZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
