import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDw-_n5zHslagcevlRpg_ZlSb8rf8Ro1hM",
  authDomain: "storytelling-app-6ede1.firebaseapp.com",
  databaseURL: "https://storytelling-app-6ede1-default-rtdb.firebaseio.com",
  projectId: "storytelling-app-6ede1",
  storageBucket: "storytelling-app-6ede1.appspot.com",
  messagingSenderId: "712363145092",
  appId: "1:712363145092:web:e9f78d58bdbb2920a68fd1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();