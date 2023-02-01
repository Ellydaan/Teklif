<template>
<div  class="container" v-if="isLoading">
  <div v-for="{ id,poste, lieux,mission } in users" :key="id" class="card" style="width: 18rem;">
    <div  class="card-body">
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

</div>
  <div v-else>Loading...</div>
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
.container{
  display: flex;
  flex-wrap: wrap;
  width: 100%;



}
.card{
  margin: 20px;
}
</style>
