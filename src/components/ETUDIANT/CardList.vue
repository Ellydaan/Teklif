<template>
  <div class="CTN">
    <div class="bck">

    </div>
    <div class="header">
      <h1>Trouvez l'étudiant qu’il vous faut </h1>
    </div>
    <div class="ctn">
      <div class="card" v-for="{ id,prenom, nom, specialite,image} in Card" :key="id">
        <div class="boxR">
          <img src="../../assets/logo_tek.png" alt="logo" class="img" style="width: 170px">
        </div>
        <div class="boxL">
          <div class="boxL1">
            <div class="boxT">
            <h1>{{ prenom}}</h1>
            <h1>{{ nom}}</h1>
            </div>
            <div class="boxB">

              <p>{{specialite }}</p>

            </div>
          </div>
          <div class="boxL2">
            <router-link class="btn" :to="`/Savoir/${id}`">En savoir plus</router-link>

          </div>




        </div>


      </div>



    </div>

  </div>

</template>


<script>
import { useLoadCard,} from '@/main'
import CloudImage from "@/components/ENTREPRISE/CloudImage";

export default {
  name: "CardList",
  components: {CloudImage},

  setup() {
    const Card = useLoadCard()
    return { Card }
  }

}


</script>

<style scoped>
.CTN{
  margin-top: 60px;


}

.ctn{
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

}
.header{
  width: 100%;
  height: 160px;
  background: rgb(192,58,254);
  background: linear-gradient(33deg, rgba(192,58,254,1) 31%, rgba(203,161,223,1) 60%);
  display: flex;
  justify-content: center;
  align-items: center;

}
.card{


  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  width: 872px;
  height: 172px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.04);


}
.boxR{
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(0, 0, 0, 0.16);
  width: 200px;
  height: 172px;
  border-radius: 10px 0 0 10px;
  background: rgb(192,58,254);
  background: linear-gradient(33deg, rgba(192,58,254,1) 31%, rgba(203,161,223,1) 60%);
}

.boxL{

  border-radius: 0 10px 10px 0;
  width: 672px;
  height: 172px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

}
.boxL1 {

  width: 70%;
  height: 60%;



}
.boxT{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: center;
  gap: 20px;

}



.boxB{
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
  justify-content: center;



}
.boxL1 h1 h2{
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 30px;
  display: flex;
  align-self: start;
  padding-left: 25px;

}
p{
  font-size: 20px;
  font-weight: 500;


}
.boxL2{
  border-left: 1px solid rgba(0, 0, 0, 0.16);
  width: 30%;
  height: 100%;
  border-radius: 0 10px 10px 0;

}
.btn{

  color: #000000;
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0 10px 10px 0;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

}

@media screen and (max-width: 960px){
  .card{
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
  .header h1{
    font-size: 25px;
  }
  .boxR{
    width: 100%;
    height: 100px;
    border-radius: 10px 10px 0 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.16);
  }
  .boxL{
    width: 100%;
    height: 100%;
    border-radius: 0 0 10px 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .boxL1{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.16);
  }
  .boxL2{
    width: 100%;
    height: 50%;
    border-radius: 0 0 10px 10px;
  }
  .boxB{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .boxB p{
    margin-bottom: 20px;
  }
  .boxL1 h1{
    padding-left: 0;
    align-self: center;
  }
}








</style>
