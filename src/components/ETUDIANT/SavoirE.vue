<template>
  <div  class="CTN" >
    <div v-if="isLoading">
     <Loading/>
    </div>

    <div id="demoObject" v-else>
      <div class="ctn">
        <h1 class ="Titre">{{info.nom}}</h1>
        <h2 class ="ST">{{info.prenom}}</h2>
        <p class ="Text">Spe: {{info.specialite}}</p>
        <p class ="Text">{{info.profile}}</p>
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
            <h1>Postuler</h1>

          </div>
        </div>
      </div>
    </div>





  </div>


</template>

<script>


import firebase from "firebase/compat/app";

import Navbar from "@/components/navbar";
import Loading from "@/components/Loading";


export default {
  components: {Loading, Navbar},
  data() {
    return {
      isLoading: true,
      info: {},
    }
  },
  async created() {
    const missionId = this.$route.params.id
    firebase.auth().currentUser.uid
    const entrepriseRef = firebase.firestore().collection('etudiant').doc(missionId)
    const cardRef = entrepriseRef.collection('CardE')
    const querySnapshot = await cardRef.get()
    querySnapshot.forEach(doc => {
      this.info = doc.data()
    })
    this.isLoading = false
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

</style>
