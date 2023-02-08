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


const CardECollection = db.collection('CardE',)
const Card = db.collection('Card')



export const createUser = user => {
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await CardECollection.doc(id).get()
  return user.exists ? user.data() : null
}
export const getE = async id => {
  const card = await Card.doc(id).get()
  return card.exists ? card.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = CardECollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}
export const useLoadCard = () => {
  const etudiant = ref([])
  const close = Card.onSnapshot(snapshot => {
    etudiant.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return etudiant
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
