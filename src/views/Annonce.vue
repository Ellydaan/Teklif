<template>
<div class="ctn">



  <form class="form " >

    <input type="text" class="form-field animation a3" placeholder="Name"  required>
    <input type="email" class="form-field animation a4" placeholder="Email Address" v-model="email" required>
    <input type="password" class="form-field animation a5" placeholder="Password" v-model="password" required>
    <input type="password" class="form-field animation a6" placeholder="Confirmer votre password" v-model="password1" required>
    <button class="animation a8">s'enregister</button>

  </form>



</div>

</template>

<script>
export default {
  name: "Annonce"
}
</script>

<style scoped>
.ctn{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: red;
  flex-direction: column;
}

.form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 80%;
}

</style>
