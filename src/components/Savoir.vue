<template>
  <div  class="CTN" >


    <div class="ctn" v-if="!isLoading">
    <h1>{{info.poste}}</h1>
    <h1>{{info.lieux}}</h1>
    <h1>{{info.mission}}</h1>
    </div>
    <div v-else>Loading...</div>
  </div>


</template>

<script>

import {getUser} from '@/main'

export default {
  components: {Navbar},
  data() {
    return {
      isLoading: true,
      info: {},
    }
  },
  async mounted() {
    // const route = useRoute()
    const userId = this.$route.params.id
    const user = await getUser(userId)
    this.isLoading = false
    console.log(user, userId)
    this.info = user
  },


}

import Navbar from "@/components/navbar";
</script>

<style scoped>

.CTN{
  height: 100vh;
  display: flex;
  justify-content: center;

}
.ctn{
  background-color: pink;
  width: 50%;
  border-radius: 55px;
  box-shadow: inset 14px 14px 75px #d1d1d1,
  inset -14px -14px 75px #ffffff;
  margin-top: 40px;


}

</style>
