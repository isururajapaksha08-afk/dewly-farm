import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyChbfr_dhwJ2OuPrIpqam2khnJ8eC0F2nA",
  authDomain: "dewlyfarm.firebaseapp.com",
  projectId: "dewlyfarm",
  storageBucket: "dewlyfarm.firebasestorage.app",
  messagingSenderId: "596310523190",
  appId: "1:596310523190:web:0299e442b97107cee6c797",
  measurementId: "G-8T9KMF8ZM3",
};

const app = initializeApp(firebaseConfig);

let analytics = null;

isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

export { app, analytics };