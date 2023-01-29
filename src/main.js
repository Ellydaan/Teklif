import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBuAD7t0E6pJdGmyjL7GJIzAtRfrVVCXw0",

  authDomain: "login-73f89.firebaseapp.com",

  projectId: "login-73f89",

  storageBucket: "login-73f89.appspot.com",

  messagingSenderId: "140352144251",

  appId: "1:140352144251:web:b3776385314363832233de",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth

const auth = firebase.auth();

export { auth, db };
const db = firebaseApp.firestore()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
