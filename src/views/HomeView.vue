<template>
  <div>


<navbar/>
    <div class="CTN">
<Heros/>

    <solution/>
    <partenaire/>
    <domain/>
<Last/>
      <Footer/>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src

import navbar from "@/components/navbar";
import Heros from "@/components/Heros";
import Solution from "@/components/Solution";
import Partenaire from "@/components/Partenaire";
import Domain from "@/components/Domain";
import Last from "@/components/Last";
import Footer from "@/components/Footer";



export default {
  name: 'HomeView',
  components: {
    navbar,Heros,Solution,Partenaire,Domain,Last,Footer
  }

}
</script>

<style scoped>
.CTN{



}

</style>

