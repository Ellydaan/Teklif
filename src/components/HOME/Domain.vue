<template>
<div class="ctn">
  <div class="item1">

  <h1>DES ÉTUDIANTS QUALIFIÉS DANS DIVERS DOMAINES </h1>
  </div>

  <div class="item2">

    <div class="card" >
      <img src="../../assets/img2.png" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">DATA & TECHNOLOGIE</p>
      </div>
    </div>
    <div class="card" >
      <img src="../../assets/img1.png" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">MARKETING & COMMUNICATION</p>
      </div>
    </div>
    <div class="card">
      <img src="../../assets/img3.png" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">SCIENCES & INGÉNIERIE</p>
      </div>
    </div>



  </div>

  <div class="item2">
    <div class="card" >
      <img src="../../assets/img4.png" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">ÉCONOMIE & GESTION</p>
      </div>
    </div>
    <div class="card" >
      <img src="../../assets/img5.png" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">DESIGN & CRÉATION</p>
      </div>
    </div>
    <div class="card">
      <img src="../../assets/img6.png" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">SANTÉ &  BIOLOGIE</p>
      </div>
    </div>



  </div>




  </div>


</template>

<script>
export default {
  name: "Domain"
}
</script>

<style scoped>
.ctn{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 100px ;
}
.item2{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin-top: 30px;

}
.card{
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: black solid 1px;
  width: 20%;

}
.card-text{
  text-align: center;

}
.card-body{
  background-color: #D9D9D9;
}
h1{
  margin-bottom: 90px;

}
@media screen and (max-width: 1300px) {
.ctn{
  height: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

}
  .item2{
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top: 30px;
  }
  .card{
    width: 80%;
    margin-bottom: 30px;
  }
  h1{
    text-align: center;
    font-size: 30px;
    height: 100%;
    margin-bottom: 20px;


  }

}




</style>
