<template>
  <div class="CTN">
  <Navbar/>
<CardE/>
    <CardsList/>
  </div>
</template>

<script>
import CardE from "@/components/ETUDIANT/CardE";
import Navbar from "@/components/navbar";
import CardsList from "@/components/ETUDIANT/CardList";

export default {
  name: "AddC",
  components: {CardsList, Navbar, CardE},
}
</script>

<style scoped>

</style>
