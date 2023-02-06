<template>
  <div class="about" >
    <navbar/>
    <UserList />
  </div>
</template>
<script>

import UserList from "@/components/ENTREPRISE/UserList";

import navbar from "@/components/navbar";

export default {
  name: 'About',
  components: {
    navbar,
    UserList,
  },
}
</script>
