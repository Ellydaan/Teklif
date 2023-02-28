import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { ref, onUnmounted } from 'vue'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import '@fortawesome/fontawesome-free/css/all.css'


const firebaseConfig = {

  apiKey: "AIzaSyAiFFySEuQ3UWlG-S_J1G0VMiMTr8Uu_LU",

  authDomain: "boob-50755.firebaseapp.com",

  projectId: "boob-50755",

  storageBucket: "boob-50755.appspot.com",

  messagingSenderId: "36262133635",

  appId: "1:36262133635:web:e035b48f606c73dab880b6"

};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { getStorage } from "firebase/storage";
const storage = getStorage(app);

export { storage }

const auth = firebase.auth();

export { auth, db };
const db = firebaseApp.firestore()

Vue.config.productionTip = false






new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
