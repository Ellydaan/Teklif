<template>
  <div>
  <UserCreate />

  </div>

</template>

<script>
import UserCreate from '@/components/ENTREPRISE/UserCreate.vue'
import UserList from '@/components/ENTREPRISE/UserList.vue'

export default {
  name: 'Home',
  components: { UserCreate, UserList }
}
</script>

