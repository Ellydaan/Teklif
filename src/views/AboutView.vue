<template>
  <div class="about">
    <navbar/>
    <UserList />
  </div>
</template>
<script>

import UserList from "@/components/UserList";
import Navbar from "@/components/navbar";

export default {
  name: 'About',
  components: {
    Navbar,
    UserList,
  },
}
</script>
