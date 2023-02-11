<template>

  <div class="ctn">
    <navbar />

    <div class="ctn1">
      <div class="card1">

        <div class="card card-body ">
          <h2 class="Titre">Ajouter une annonce</h2>
          <h3 class="STitre"> Comme vous n'avez jamais publié d'offre d'emploi, vous devrez créer un compte employeur.</h3>
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label>Intitulé de la mission *</label>
              <input  v-model="form.poste" class="form-control" required />
            </div>

            <div class="form-group mt-3">
              <label>Lieux</label>
              <input
                  v-model="form.lieux"
                  class="form-control"
                  type="text"
                  required
              />
            </div>
            <div class="form-group ">
              <label>La Mission</label>
              <input
                  v-model="form.mission"
                  class="mission form-control"
                  type="text"
                  required
              />
            </div>
            <div class="form-group ">
              <label>Nom de l'entreprise</label>
              <input
                  v-model="form.entreprise"
                  class="mission form-control"
                  type="text"
                  required
              />
            </div>
            <div class="form-group ">
              <label>Durée</label>
              <input
                  v-model="form.Durée"
                  class="mission form-control"
                  type="text"
                  required
              />
            </div>
            <div class="form-group ">
              <label>Description de la mission</label>
              <input
                  v-model="form.description"
                  class="mission form-control"
                  type="text"
                  required
              />
            </div>
            <div class="form-group ">
              <label>Profile recherché</label>
              <input
                  v-model="form.profile"
                  class="mission form-control"
                  type="text"
                  required
              />
            </div>
            <div class="form-group ">
              <label>Rémuneration</label>
              <input
                  v-model="form.remuneration"
                  class="mission form-control"
                  type="text"
                  required
              />
            </div>
<div class="form-group ">
              <label>Image</label>
  <input type="file" ref="myfile">



        </div>



            <button type="submit" class="btn btn-success mt-3">
              Create Mission
            </button>
          </form>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import 'firebase/firestore'
import Navbar from "@/components/navbar";
import {db,} from "@/main";
import firebase from "firebase/compat/app";
import  { storage } from "@/main"
import  { ref,uploadBytes } from "firebase/storage"





export default {
  components: { Navbar,},
  data() {

    return {
      form: {
        poste: '',
        lieux: '',
        mission: '',
        entreprise:'',
        Durée:'',
        description:"",
        profile:"",
        remuneration:"",
        image: null }

    };


  },
  methods: {

    onSubmit() {
      const storageRef = ref(storage, 'Entreprise/' + this.$refs.myfile.files[0].name);
      uploadBytes(storageRef, this.$refs.myfile.files[0])

      db.collection("CardE").add({...this.form, image: storageRef.fullPath } )
          .then(() => {
            this.form = { poste: '', lieux: '', mission: '', entreprise:'', Durée: '',description:"",profile:"",remuneration:"",image: null  };
            console.log("ok")

          })

          .catch((error) => {
            console.error(error)
          })


    },

  }

};


</script>

<style scoped>
.ctn1{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2e6e2;
  height: 100%;
  border-top: #FFFFFF 2px solid;
}
.card1{
  width: 50%;
  height: 80%;
  background-color: white;

}
.Titre{

  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
  padding-bottom: 5px;
}
.STitre{
  font-size: 20px;
  padding-bottom: 20px;
}


</style>
