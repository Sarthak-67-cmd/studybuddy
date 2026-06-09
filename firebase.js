// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "studybuddy-15aef.firebaseapp.com",
  projectId: "studybuddy-15aef",
  storageBucket: "studybuddy-15aef.firebasestorage.app",
  messagingSenderId: "686235862425",
  appId: "1:686235862425:web:82bac01de4cc3929557f08"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
