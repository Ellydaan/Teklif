<template>
  <div>
    <navbar/>
    <Savoir/>
  </div>

</template>

<script>
import Savoir from "@/components/ENTREPRISE/Savoir";
import navbar from "@/components/navbar";

export default {
  name: 'Ensavoir',
  components: {
    Savoir,navbar
  }
}
</script>
