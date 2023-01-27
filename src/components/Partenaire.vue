<template>
<div class="ctn_flex">
  <div class="item_txt">

<h1>DES PARTENAIRES INTERNATIONAUX</h1>
    <p>Des entreprises et institutions à la renomée internationale croient en Teklif. Ils proposent des missions aux étudiants, à la recherche de leur futurs collaborateurs.</p>
    <a href="#" class="btn_txt">En savoir plus </a>


</div>

  </div>



</template>

<script>
export default {
  name: "Partenaire"
}
</script>

<style scoped>

.ctn_flex{
  color: white;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background:  url(../assets/partenaire.png) no-repeat top center ;
  margin-top: 50px;
}
.item_txt{
  text-align: center;
  width: 50%;
  height: 50%;
  background-color: rgb(233, 78, 27,0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;

}
.btn_txt{

  background-color: transparent;
  color: #FFFFFF;
  border: solid 3px #FFFFFF;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
  text-decoration: none;

}
p{
  margin: 0;
  width: 80%;
  font-size: 20px;
}
@media screen and (max-width: 1300px) {
  .item_txt{
    width: 80%;
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
  }



}




</style>
