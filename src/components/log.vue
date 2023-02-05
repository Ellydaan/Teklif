<template>
  <div>
    <form @submit.prevent="createUser">
      <input v-model="email" type="email" placeholder="Email">
      <input v-model="password" type="password" placeholder="Password">
      <button type="submit">Create Account</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import {db} from "@/main";
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async createUser() {
      try {
        await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
        const user = firebase.auth().currentUser;
        await db.collection('entreprise').doc(user.uid).set({ email: this.email });
        alert('Account created successfully!');
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    },
  },
};
</script>

