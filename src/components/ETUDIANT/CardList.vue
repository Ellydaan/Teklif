<template>

      <div class="CTN">
        <div class="card" v-for="{ id,prenom, nom, specialite} in Card" :key="id">


        </div>



      </div>
</template>


<script>
import { useLoadCard,} from '@/main'
export default {
  name: "CardList",

  setup() {
    const Card = useLoadCard()
    return { Card,  }
  }
}


</script>

<style scoped>
.CTN{
  display: flex;

  justify-content: space-around;
  align-items: center;
  /* flex-flow: row wrap; */
  flex-direction: row;
  flex-wrap: wrap;

  background-color: #bbdefb;
  height: 100vh;
  padding: 15px;
  gap: 5px;
}
.card{

  display: flex;
  width: 20%;
  height:50%;
  background-color: red;

}

</style>
