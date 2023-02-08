<template>
  <div class="CTN" >
    <Navbar/>
    <div class="ctn" v-if="showButton">
      <div class="ctn1">
        <router-link  to="/AddC" class="btn">Ajouter votre Card</router-link>
      </div>
    </div>
    <CardsList/>
  </div>
</template>


<script>
import Navbar from "@/components/navbar";
import CardsList from "@/components/ETUDIANT/CardList";
import firebase from "firebase/compat/app";
import {db} from "@/main";

export default {
  name: "Etudiant",
  components: {Navbar,CardsList},
  data() {
    return {
      prenom: "",
      nom: "",
      specialite: "",
      showButton: false
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        db.collection("etudiant").doc(user.uid).get()
            .then((doc) => {
              if (doc.exists) {
                this.prenom = doc.data().prenom;
                this.nom = doc.data().nom;
                this.specialite = doc.data().specialite;

                this.showButton = !this.specialite;
              }
            });
      }
    });
  }
}

</script>

<style scoped>
.ctn{
  border-top: #FFFFFF 1px solid;
  width: 100%;
  height: 30vh;
  background-color: #f2e6e2;
}

.ctn1{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}
.btn {
  position: relative;
  font-size: 17px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 2.5em;
  display: inline-block;
  border-radius: 6em;
  transition: all .2s;
  border: none;
  font-family: inherit;
  font-weight: 500;
  color: black;
  background-color: white;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all .4s;
}

.btn::after {
  background-color: #fff;
}

.btn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

</style>
