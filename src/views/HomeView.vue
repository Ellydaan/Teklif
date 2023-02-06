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
import Heros from "@/components/HOME/Heros";
import Solution from "@/components/HOME/Solution";
import Partenaire from "@/components/HOME/Partenaire";

import Last from "@/components/HOME/Last";
import Footer from "@/components/HOME/Footer";
import Domain from "@/components/HOME/Domain";




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

