<template>

      <div class="CTN">
        <div class="card" v-for="{ id,prenom, nom, specialite} in Card" :key="id">

            <div class="card1">
              <div class="card-border-top">
              </div>
              <div class="img">
              </div>
              <div class="Input">

                <P>{{prenom}}</P>
                <p>{{nom}}</p>
               <p>{{specialite}}</p>


              </div>
            </div>
<router-link :to="`/EnSavoirE/${id}`" class="btn">Savoir plus</router-link>
          </div>

        </div>




</template>


<script>
import { useLoadCard,} from '@/main'
export default {
  name: "CardList",

  setup() {
    const Card = useLoadCard()
    return { Card }
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

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 350px;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  border: none;
  font-family: inherit;
}
.card1{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  border: none;
  font-family: inherit;
}
.Input{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

}

.card span {
  font-weight: 600;
  color: white;
  text-align: center;
  display: block;
  padding-top: 10px;
  font-size: 1.3em;
}

.card .job {
  font-weight: 400;
  color: white;
  display: block;
  text-align: center;
  padding-top: 5px;
  font-size: 1em;
}

.card .img {
  width: 40%;
  height: 30%;
  background: #e8e8e8;
  border-radius: 100%;
  margin-bottom: 15px;

}

.card button {
  padding: 8px 25px;
  display: block;
  margin: auto;
  border-radius: 8px;
  border: none;
  margin-top: 30px;
  background: #e8e8e8;
  color: #111111;
  font-weight: 600;
}

.card button:hover {
  background: #212121;
  color: #ffffff;
}

/* From uiverse.io by @alexruix */
.input {
  line-height: 28px;
  border: 2px solid transparent;
  border-bottom-color: #777;
  padding: .2rem 0;
  outline: none;
  background-color: transparent;
  color: #0d0c22;
  transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.input:focus, input:hover {
  outline: none;
  padding: .2rem 1rem;
  border-radius: 1rem;
  border-color: #7a9cc6;
}

.input::placeholder {
  color: #777;
}

.input:focus::placeholder {
  opacity: 0;
  transition: opacity .3s;
}



</style>
