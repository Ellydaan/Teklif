<template>
<div class="ctn_flex">
  <div class="item_txt">

<h1>DES PARTENAIRES INTERNATIONAUX</h1>
    <p>Des entreprises et institutions à la renomée internationale croient en Teklif. Ils proposent des missions aux étudiants, à la recherche de leur futurs collaborateurs.</p>
      <ButtonS/>


</div>

  </div>



</template>

<script>
import ButtonS from "@/components/HOME/Button/ButtonS";
import Button from "@/components/HOME/Button/ButtonO";

export default {
  name: "Partenaire",
  components: {Button, ButtonS}
}
</script>

<style scoped>

.ctn_flex{
  margin-top: 90px;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;



}
.item_txt{
  text-align: center;
  width: 100%;
  height: 50%;
  background-color: rgb(233, 78, 27,0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  color: #000000;

}

p{
  margin-bottom: 20px;
  width: 40%;
  font-size: 20px;

}
@media screen and (max-width: 1300px) {
  .item_txt{
    width: 100%;
    height: 50%;
    background-color: rgb(233, 78, 27,0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
  }
  h1{
    font-size: 30px;
  }
  p{
    font-size: 15px;
    width: 80%;
  }



}




</style>
