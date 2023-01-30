<template>
<div  class="container">
  <div v-for="{ id,poste, lieux,mission } in users" :key="id" class="card" style="width: 18rem;">
    <div  class="card-body">
      <h5 class="card-title">{{ poste }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ lieux }}</h6>
      <p class="card-text">{{ mission }}</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
</div>
</template>

<script>
import { useLoadUsers, deleteUser } from '@/main'

export default {
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
