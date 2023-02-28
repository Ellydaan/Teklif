<template>
  <div  class="CTN" >
    <div v-if="isLoading">
      ça charge
    </div>

    <div id="demoObject" v-else>

      <div class="haut">
        <div class="ctn">
          <h1 class ="Titre">{{info.poste}}</h1>
          <h2 class ="ST">{{info.lieux}}</h2>
          <p class ="Text">Description de la mission : {{info.mission}}</p>
          <p class ="Text">{{info.profile}}</p>
        </div>







        <div class="form">
          <div class="form1">

            <input type="text" placeholder="Nom" v-model="form.nom" />
            <input type="text" placeholder="Prénom" v-model="form.prenom" />
            <input type="text" placeholder="Email" v-model="form.email" />
            <input type="text" placeholder="Téléphone" v-model="form.tel" />
            <input type="file" ref="myfile">

          </div>
        </div>
      </div>

      <div class="box">
        <div class="item1">
          <div class="right">
            <h1>Rémuneration</h1>
            <p> {{info.remuneration}}</p>
          </div>
        </div>
        <div class="item2"><div class="right">
          <h1>Durée</h1>
          <p> {{info.Durée}}</p>
        </div>

        </div>
        <div class="item3">
          <div class="left">
            <button @click="OnSubmit">Postuler</button>

          </div>
        </div>
      </div>
    </div>





  </div>


</template>

<script>

import {db, storage, } from '@/main'
import firebase from "firebase/compat/app";
import  { ref,uploadBytes } from "firebase/storage"
import Navbar from "@/components/navbar";



export default {

  components: {Navbar},
  data() {
    return {
      isLoading: true,
      info: {},
      form: {
        prenom: '',
        nom: '',
        email: '',
        tel: '',
        image: null,
        post: '',
        emailE: '',
      }
    }
  },

  async mounted() {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        db.collection("etudiant").doc(user.uid).get()
            .then((doc) => {
              if (doc.exists) {
                this.form.prenom = doc.data().prenom;
                this.form.nom = doc.data().nom;
              }

            });
      }
    });

  },

  methods: {
    async OnSubmit() {
      const storageRef = ref(storage, 'EtudiantToEntreprise/' + this.$refs.myfile.files[0].name);
      await uploadBytes(storageRef, this.$refs.myfile.files[0])

      await db.collection("EtudiantToEntreprise").add({...this.form, image: storageRef.fullPath,post: this.info.poste, emailE: this.info.emailE})
      console.log("tout est bon")
    },

  },

async created() {
  const missionId = this.$route.params.id
  firebase.auth().currentUser.uid
  const entrepriseRef = firebase.firestore().collection('entreprise').doc(missionId)
  const cardRef = entrepriseRef.collection('Card')
  const querySnapshot = await cardRef.get()
  querySnapshot.forEach(doc => {
    this.info = doc.data()
    this.isLoading = false
  })

}





}




</script>

<style scoped>

.CTN {
  width: 100%;
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

}
.haut{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 300px;
}
.form{
  width:  426px;
  height: 100%;
  border-radius: 0 45px 0 0;
  background-color: #FF7D5A;
}
.form1{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  padding: 0 20px;
}
.ctn{
  margin: 15px 20px ;

}


#demoObject {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  -webkit-box-shadow: 15px 6px 9px 1px rgba(0,0,0,0.31);
  box-shadow: 15px 6px 9px 1px rgba(0,0,0,0.31);
  background: #FFFFFF;
  border-radius: 45px;
  margin-top: 70px

}
body#tinymce {
  background: #FFFFFF
}
.Titre{
  font-size: 40px;
  font-weight: 700;
  color: #2e2d31;
  padding: 0 30px;

}
.ST{
  font-size: 20px;
  font-weight: 10;
  font-style: italic;
  color: #2e2d31;
  padding-left: 45px;
}
.Text{
  font-size: 20px;
  font-weight: 400;
  color: #2e2d31;
  padding: 0 30px;
}
.box{
  display: flex;
  flex-direction: row;

  align-items: center;
  width: 100%;
  height: 100px;
  border-radius: 0 0 45px 45px;
  background-color: #F2E6E2;
}
.item1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;

  height: 100%;
  border-radius: 0 0 0 45px;

}
.item2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 33%;

  height: 100%;


}
.item3{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 100%;
  border-radius: 0 0 45px;
  background-color: #FF7D5A;

}
.right p {
  font-size: 20px;
  font-weight: 400;
  color: #000000;
  padding: 0 30px;
  text-align: center;
}
.right h1{
  font-size: 20px;
  font-weight: 400;
  color: #000000;
  padding: 0 30px;
  text-align: center;
}
.left h1{
  font-size: 40px;
  font-weight: 400;
  color: #000000;
  padding: 0 30px;
  text-align: center;
}
input{
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #000000;
  padding: 0 20px;
  margin: 10px 0;
}

</style>
