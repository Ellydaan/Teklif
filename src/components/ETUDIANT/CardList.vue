<template>
  <div class="CTNN">
<div class="CTN">
  <div class="card" v-for="{ id,prenom, nom, specialite,image} in Card" :key="id">

    <div class="TXT">
      <div class="img">
        <CloudImage v-bind:path="image" />
      </div>
      <span>{{prenom}}</span>
      <span>{{nom}}</span>
      <span>{{specialite}}</span>

      <router-link :to="`/EnSavoirE/${id}`" class="btn">En savoir plus</router-link>
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
.CTNN{
  display: flex;
  justify-content: center;
  margin-top: 5px;
  gap: 20px;
  background-color: #f2e6e2;
  width: 100%;
}
.CTN {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 60%;
  padding-left: 25px;

}
.TXT {
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card {
  margin-top: 30px;
  width: 17em;
  height: 22.5em;
  background: #ff7e5a;
  transition: 1s ease-in-out;
  clip-path: polygon(30px 0%, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0% 30px);
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
}

.card span {
  font-weight: bold;
  color: white;
  text-align: center;
  display: block;
  padding-top: 1em;
  font-size: 1em;
}

.card .info {
  font-weight: 400;
  color: white;
  display: block;
  text-align: center;
  padding-top: 0.1em;
  font-size: 0.72em;
  margin: 1em;
  margin-top: 1em;
}

.card .img {
  width: 4.8em;
  height: 4.8em;
  background: white;
  border-radius: 15px;

}



.card a {
  color: white;
  transition: .4s ease-in-out;
}

.card a:hover {
  color: rgb(36, 116, 221);
}







</style>
