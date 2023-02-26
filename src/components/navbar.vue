<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top " id="navbar">
    <router-link to="/" class="navbar-brand" href="#"><img class="logo" src="../assets/logo_tek.png" alt="logo_tek"> </router-link>

    <button class="navbar-toggler btnn " type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
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

        <div class="ctn" v-if="isEntreprise" >

        <li class="nav-item">

          <router-link to="/Annonce" class="nav-link ">{{addM}}</router-link>
        </li>

        </div>

        <div class="ctn" v-if="isEtudiant" >

          <li class="nav-item">

            <router-link to="/Like" class="nav-link ">{{Like}}</router-link>
          </li>

        </div>




      </ul>
      <div class="navb-txt">
      <span class="navbar-text">

<!--quand t connecter -->

    <button class="myButton"  v-if="isLoggedIn" @click="logout" ><p>Déconnexion</p> </button>
         <button class="myButton" @click="btn" v-else >Connexion </button>
    </span>
        <span class="navbar-text">


    </span>
        <button class="BTN" v-if="isLoggedIn" >{{name}}</button>

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
      Like:"",
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
            this.Like = "";
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
                this.Like = "Nos likes";
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
            this.addM = "";
            this.name="";
            this.isLoggedIn = false;
            console.log("logout");
          })
          .catch(error => {
            alert(error.message);
            this.$router.push('/');
          });
    },
    btn(){
      this.$router.push('/Login');
    }
  }
};
</script>



<style scoped>
.navbar{
  padding: 0 10px 0 10px;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

}
    .logo{
      width: 200px;

    }
    .bg-light{
      background: rgb(255,255,255);
      background: linear-gradient(33deg, rgba(255,255,255,1) 31%, rgba(245,245,245,1) 100%);

    }
    .nav-link:hover{
      color: #c03afe !important;

    }
    .navb-txt{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 20px;

    }
.navbar-shrink {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  background-color: #f8f9fa;
  transition: padding-top 0.3s, padding-bottom 0.3s;
}

.navbar-shrink .logo {
  max-height: 50px;
  transition: max-height 0.3s;
}

    p{
      margin: 0;
    }

.myButton {
  border: none;
  background: rgb(83,170,248);
  background: linear-gradient(33deg, rgba(83,170,248,1) 52%, rgba(77,203,245,0.7372082622111344) 100%);
  color: white;
  font-size: 1.15rem;
  font-weight: 500;
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: transform 225ms, box-shadow 225ms;

}

button:hover {
  transform: scale(1.05) translate(0, -0.15rem);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.35);
}

button:active {
  transform: scale(1) translate(0, 0.15rem);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
.BTN{
  border: none;
  background: none;

}



</style>
