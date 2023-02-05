<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand" href="#"><img class="logo" src="../assets/logo_tek.png" alt="logo_tek"> </router-link>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/Mission" class="nav-link " >Mission</router-link>
<!--          <router-link to="/Mission" class="nav-link " v-else>{{mission}}</router-link>-->

        </li>
        <li class="nav-item">
          <router-link to="/Etudiant" class="nav-link">Etudiant</router-link>
<!--          <a class="nav-link" href="#" v-else >{{etudiant}}</a>-->
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Nos service</a>
        </li>

        <li class="nav-item">

          <router-link to="/Annonce" class="nav-link " v-if="isEntreprise">{{addM}}</router-link>
          <router-link to="/Annonce" class="nav-link " v-else>{{addM}}</router-link>

        </li>



      </ul>
      <div class="navb-txt">
      <span class="navbar-text">

<!--quand t connecter -->
    <button class="myButton"  v-if="isLoggedIn" @click="logout" >Déconnexion </button>
         <router-link class="myButton" to="/Login" v-else >Connexion </router-link>
    </span>
        <span class="navbar-text">


    </span>
        <button class="BTN" v-if="isLoggedIn" >{{name}}<img src="../assets/icons8-user-60.png" alt="user"></button>

      </div>
    </div>
  </nav>

</template>




<script>
import firebase from "firebase/compat/app";

export default {
  name: 'navbar',

  data() {
    return {
      addM:"",
      name:"",
      mission:"",
      etudiant:"",
      isLoggedIn: false,
      isEntreprise:false,
      isEtudiant:false,
      user: JSON.parse(localStorage.getItem("user"))
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase.firestore().collection("entreprise").doc(user.uid).get().then(doc => {
          if (doc.exists) {
            this.name = user.email.split('@')[0];
            this.isLoggedIn = true;
            this.isEntreprise = true;
            this.isEtudiant = false;
            this.mission = "";
            this.etudiant = "Nos étudiants";
            this.addM = "Ajouter une mission";
            localStorage.setItem("user", JSON.stringify(user));
            console.log("Entreprise user");
          }
          else {
            firebase.firestore().collection("etudiant").doc(user.uid).get().then(doc => {
              if (doc.exists) {
                this.name = user.email.split('@')[0];
                this.isLoggedIn = true;
                this.isEntreprise = false;
                this.isEtudiant = true;
                this.mission = "Nos missions";
                this.etudiant = "";
                localStorage.setItem("user", JSON.stringify(user));
                console.log("Student user");

              }
            })
          }
        })
      }
              else {
                this.isEntreprise = false;
                this.isLoggedIn = false;
                this.isEtudiant = false;
                localStorage.removeItem("user");
                console.log("No user");
              }

      });
  },
  methods: {
    logout() {
      firebase
          .auth()
          .signOut()
          .then(() => {
            alert('Successfully logged out');
            this.$router.push('/');
            this.mission = "";
            this.etudiant = "";
            this.name="";
            this.isLoggedIn = false;
            console.log("logout");
          })
          .catch(error => {
            alert(error.message);
            this.$router.push('/');
          });
    },
  }
};
</script>



<style scoped>
.logo{
  width: 150px;
  height: 10%;
}
.bg-light{
  background-color: #F2E6E2 !important;
}
.nav-link:hover{
  color: #FF7D5A !important;

}
.navb-txt{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;

}
.myButton {
  background-color:#ff7e5a;
  border-radius:28px;
  border:1px solid #ff7e5a;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:17px;
  padding:16px 31px;
  text-decoration:none;
  text-shadow:0px 1px 0px #b23e35;
}
.myButton:hover {
  background-color:#fcaf9c;
}
.myButton:active {
  position:relative;
  top:1px;
}
.connect{

  text-decoration: none;
}
.connect:hover{
  color: #FF7D5A !important;
}
.Ann{
  text-decoration: none;
  color : #000000;
}
.BTN{
  background-color: transparent;
  border: none;
}



</style>
