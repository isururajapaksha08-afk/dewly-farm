
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
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

const auth = getAuth(app);

let analytics = null;

isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

const userIdToEmail = (userId) => {
  return `${userId.trim().toLowerCase()}@dewlyfarm.local`;
};

const loginWithUserId = async (userId, password) => {
  const email = userIdToEmail(userId);

  return signInWithEmailAndPassword(
    auth,
    email,
    password
  );
};

const logout = () => {
  return signOut(auth);
};

export {
  app,
  auth,
  analytics,
  onAuthStateChanged,
  loginWithUserId,
  logout,
  userIdToEmail,
};
