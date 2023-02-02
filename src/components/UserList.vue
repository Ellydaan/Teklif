<template>
  <div  class="CTN" >
  <div class="card"  v-if="isLoading" v-for="{ id,poste, lieux,mission } in users" :key="id">
    <div class="card-body">
      <h5 class="card-title">{{ poste }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ lieux }}</h6>
      <p class="card-text">{{ mission }}</p>
      <router-link :to="`/Savoir/${id}`">
        <button class="btn btn-primary btn-sm me-2">
          En savoir plus
        </button>
      </router-link>

    </div>
  </div>
    <div v-else>Loading...</div>
  </div>

</template>

<script>
import { useLoadUsers, deleteUser } from '@/main'

export default {
  data() {
    return {
      isLoading: true,
    }
  },
  setup() {
    const users = useLoadUsers()
    return { users, deleteUser }
  }
}
</script>

<style scoped>
.CTN{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin: 0;
  padding-top: 30px;
  background: #f2e6e2;
  border-top: #FFFFFF 2px solid;
  padding-bottom: 10%;

}





.card {
  box-sizing: border-box;
  width: 30%;
  background: #f2e6e2;
  border: 1px solid white;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(6px);
  border-radius: 17px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: bolder;

}

.card:hover {
  border: 1px solid #ff7e5a;
  transform: scale(1.05);
}

.card:active {
  transform: scale(0.95) rotateZ(1.7deg);
}
.btn{
  background-color: #FF7D5A;
  border: none;


}
</style>
