<template>

  <div class="container">
    <div class="left">
      <div class="header">
        <h2 class="animation a1">Crée votre compte</h2>
        <h4 class="animation a2">Log in to your account using email and password</h4>
      </div>
      <form class="form" @submit.prevent="register">
        <input type="text" class="form-field animation a3" placeholder="Name"  required>
        <input type="email" class="form-field animation a4" placeholder="Email Address" v-model="email" required>
        <input type="password" class="form-field animation a5" placeholder="Password" v-model="password" required>
        <input type="password" class="form-field animation a6" placeholder="Confirmer votre password" v-model="password1" required>
        <p class="animation a7"><a href="#">Forgot Password</a></p>
        <button class="animation a8">s'enregister</button>
      </form>
      <router-link to="/Login" class="animation a9 button">Vous avez déja un compte</router-link>



    </div>
    <div class="right"></div>
  </div>





</template>

<script>
import firebase from "firebase/compat/app";

export default {
  data() {
    return {
      email: "",
      password: "",
      password1 : "",
    };
  },
  methods: {
    register() {
      if (this.password !== this.password1) {
        alert("Ce n'est pas le bon mdp");
        return;
      }
      firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password,)
          .then(() => {
            alert("Successfully registered! Please login.");
            this.$router.push('/Login');
          })
          .catch((error) => {
            alert(error.message);
          });

    },
  },
};
</script>
<style scoped>
* { box-sizing: border-box; }



body {
  font-family: 'Rubik', sans-serif;
}

.container {
  display: flex;
  height: 100vh;
}

.left {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  animation-name: left;
  animation-duration: 1.0s;
  animation-fill-mode: both;
  animation-delay: 0.8s;
}

.right {
  flex: 1;
  background-color: black;
  transition: 1s;
  background-image: url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}



.header > h2 {
  margin: 0;
  color: #4f46a5;
}

.header > h4 {
  margin-top: 10px;
  font-weight: normal;
  font-size: 15px;
  color: rgba(0,0,0,.4);
}

.form {
  max-width: 80%;
  display: flex;
  flex-direction: column;
}

.form > p {
  text-align: right;
}

.form > p > a {
  color: #000;
  font-size: 14px;
}

.form-field {
  height: 46px;
  padding: 0 16px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-family: 'Rubik', sans-serif;
  outline: 0;
  transition: .2s;
  margin-top: 20px;
}

.form-field:focus {
  border-color: #0f7ef1;
}

.form > button {
  padding: 12px 10px;
  border: 0;
  background: linear-gradient(to right, #de48b5 0%,#0097ff 100%);
  border-radius: 3px;
  margin-top: 10px;
  color: #fff;
  letter-spacing: 1px;
  font-family: 'Rubik', sans-serif;
}
.button{
  padding: 12px 10px;
  border: 0;
  background: linear-gradient(to right, #de48b5 0%,#0097ff 100%);
  border-radius: 3px;
  margin-top: 10px;
  color: #fff;
  letter-spacing: 1px;
  font-family: 'Rubik', sans-serif;
  width: 80%;
  text-align: center;
  text-decoration: none;
}

.animation {
  animation-name: move;
  animation-duration: 0.8s;
  animation-fill-mode: both;
  animation-delay: 0.7s;
}

.a1 {
  animation-delay: 2s;
}

.a2 {
  animation-delay: 2.1s;
}

.a3 {
  animation-delay: 2.2s;
}

.a4 {
  animation-delay: 2.3s;
}

.a5 {
  animation-delay: 2.4s;
}

.a6 {
  animation-delay: 2.5s;
}
.a7{
  animation-delay: 2.6s;
}
.a8{
  animation-delay: 2.7s;
}
.a9{
  animation-delay: 2.8s;
}

@keyframes move {
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-40px);
  }

  100% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}

@keyframes left {
  0% {
    opacity: 0;
    width: 0;
  }

  100% {
    opacity: 1;
    padding: 20px 40px;
    width: 440px;
  }
}


</style>
