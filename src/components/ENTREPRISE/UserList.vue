<template>
  <div class="CTN">
    <label for="missionFilter">Filtrer par mission:</label>
    <input id="missionFilter" v-model="filtreMission">
    <article class="card" v-if="isLoading" v-for="{ id, poste, lieux, mission, duree, image } in filteredUsers" :key="id">
      <div class="img">
        <CloudImage v-bind:path="image" />
      </div>
      <div class="card_content">
        <p class="card_title">
          Titre : {{ poste }}
        </p>
        <p class="card_subtitle">Lieux : {{ lieux }}</p>
        <p class="card_description">Mission : {{ mission }}</p>
        <p class="card_duree">Durée : {{ duree }}</p>

        <router-link class="btn" :to="`/Savoir/${id}`">En savoir plus</router-link>
      </div>
    </article>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useLoadUsers } from '@/main'
import CloudImage from '@/components/ENTREPRISE/CloudImage'

export default {
  components: { CloudImage },
  setup() {
    const isLoading = ref(true)
    const filtreMission = ref('')

    const users = useLoadUsers()

    const filteredUsers = computed(() => {
      if (filtreMission.value === '') {
        return users.value
      } else {
        return users.value.filter(user => {
          return user.mission.toLowerCase().includes(filtreMission.value.toLowerCase())
        })
      }
    })

    return { isLoading, filtreMission, filteredUsers }
  },
}
</script>


<style scoped>
.CTN{
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 80px;
  margin: 0;
  padding-top: 30px;
  background: #f2e6e2;
  border-top: #FFFFFF 2px solid;
  padding-bottom: 15%;
}

.card {
  position: relative;
  width: 350px;
  height: 450px;
  color: #2e2d31;
  background: #131313;
  overflow: hidden;
  border-radius: 20px;


}



.card_title {
  font-weight: bold;
  font-size: 20px;

}

.card_content {
  text-align: center;

  position: absolute;
  left: 0;
  bottom: 0;
  /* edit the width to fit card */
  width: 100%;
  padding: 20px;
  background: #FF7D5A;
  border-top-left-radius: 20px;
  /* edit here to change the height of the content box */
  transform: translateY(70px);
  transition: transform .25s;
  gap: 15px;
}

.card_content::before {
  content: '';
  position: absolute;
  top: -47px;
  right: -45px;
  width: 100px;
  height: 100px;
  transform: rotate(-175deg);
  border-radius: 50%;
  box-shadow: inset 48px 48px #FF7D5A;
}

.card_title {
  line-height: 10px;
}



.card_description {
  font-size: 14px;

}

.card:hover .card_content {
  transform: translateY(0);
}

.card:hover .card_description {
  opacity: 1;
  transition-delay: .25s;
}
.btn {
  display: inline-block;

  font-size: 16px;
  font-weight: 700;
  color: #000000;
  border: 3px solid #FF7D5A;
  cursor: pointer;
  position: relative;
  background-color: transparent;
  text-decoration: none;
  overflow: hidden;
  z-index: 1;
  font-family: inherit;
}

.btn::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #FF7D5A;
  transform: translateX(-100%);
  transition: all .3s;
  z-index: -1;
}

.btn:hover::before {
  transform: translateX(0);
}

</style>
