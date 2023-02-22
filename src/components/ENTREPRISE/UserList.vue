<template>
  <div class="CTN">
    <div class="bck">

    </div>
    <div class="header">
 <h1>Trouvez la mission qu’il vous faut </h1>
    </div>
    <div class="ctn">
      <div class="card" v-if="isLoading" v-for="{ id, poste, lieux, mission,  Durée, image,remuneration } in users" :key="id">
        <div class="boxR">
          <img src="../../assets/logo_tek.png" alt="logo" class="img" style="width: 190px">
        </div>
<div class="boxL">
  <div class="boxL1">
          <h1>{{ poste }}</h1>
  <div class="boxB">
  <p>{{ lieux }}</p>
  <p>{{ mission }}</p>
    <p>{{  Durée}}</p>
    <p>{{  remuneration}}</p>
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
import { useLoadUsers,  } from '@/main'
import CloudImage from "@/components/ENTREPRISE/CloudImage";


export default {
  components: {CloudImage},
  data() {
    return {
      isLoading: true,
    }
  },

  setup() {
    const users = useLoadUsers()
    return { users }
  },


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
  background: rgb(77,205,244);
  background: linear-gradient(90deg, rgba(77,205,244,1) 0%, rgba(85,156,250,1) 35%, rgba(84,164,249,1) 100%);
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
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  width: 70%;
  height: 60%;


}



.boxB{
  display: flex;
  flex-direction: row;
width: 100%;
gap: 20px;
justify-content: center;


}
.boxL1 h1{
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
    height: 200px;
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
    width: 100%;
    height: 50%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.16);
  }
  .boxL2{
    width: 100%;
    height: 50%;
    border-radius: 0 0 10px 10px;
  }
  .boxB{
    flex-direction: column;
    width: 100%;
    height: 100%;
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
