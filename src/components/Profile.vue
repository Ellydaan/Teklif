<template>
  <div>
    <h3>Profile</h3>
    <form @submit.prevent="updateProfile">
      <div>
        <label>Name:</label>
        <input type="text" v-model="name" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" v-model="email" />
      </div>
      <button type="submit">Update Profile</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";

export default {
  data() {
    return {
      name: "",
      email: ""
    };
  },
  created() {
    this.getProfile();
  },
  methods: {
    getProfile() {
      const userId = firebase.auth().currentUser.uid;
      firebase
          .database()
          .ref(`users/${userId}`)
          .once("value")
          .then(snapshot => {
            const user = snapshot.val();
            this.name = user.name;
            this.email = user.email;
          });
    },
    updateProfile() {
      const userId = firebase.auth().currentUser.uid;
      firebase
          .database()
          .ref(`users/${userId}`)
          .update({ name: this.name, email: this.email });
    }
  }
};
</script>

