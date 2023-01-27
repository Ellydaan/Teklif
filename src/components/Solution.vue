<template>
  <div class="flex-container">

    <div class="Titre">

<img class="logo" src="../assets/logo_tek.png" alt="logo">

      <p class="titre"> c’est avant tout une opportunité où étudiants et   entreprises se retrouvent pour collaborer
      </p>

    </div>


<div class="ctn">
    <div class="item1">

      <img src="../assets/entre.png" alt="entre">

      <h1>Entreprises</h1>
      <div class="txt">
      <p>avec des besoins particuliers</p>
      </div>
    </div>

    <div class="item2">
      <img src="../assets/etud.png" alt="étude">

      <h1>Étudiants</h1>
      <p class="txt2"> dynamiques prêts à répondre à ces besoins</p>
    </div>
    <div class="item3">

      <img src="../assets/entre.png" alt="entre">
      <h1>Une solution</h1>
      <div class="txtS">
        <p class="top"> conçue pour trouver le meilleur match </p> <p class="ba"> entre l’étudiant et l’entreprise</p>
      </div>
      </div>
</div>


  </div>

</template>

<script>
export default {
  name: "Solution"
}
</script>

<style scoped>

.flex-container {

  display: flex;

  justify-content: space-evenly;
  align-items: center;
  /* flex-flow: row wrap; */
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;

  background-color: #D9D9D9;

margin-top: 40px;

}
.ctn{
  display: flex;
  justify-content: space-evenly;

  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
  height: 100%;
  padding-top: 60px ;
}
.item1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #000000;
  width: 30%;
}

.item2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000000;
  width: 30%;
}

.item3{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #000000;
  width: 30%;
  margin-top: 32px;

}
.txtS{

  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.logo{
  width: 100px;
  height: 30px;
  margin-bottom: 11px;
}
h1{
  margin: 0;
  font-size: 30px;
}
p{

  margin-top:20px;
  font-size: 23px;
}
.Titre{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  background-color: #D9D9D9;
  color: #000000;
  font-size: 30px;
  font-weight: bold;
  padding-top: 30px;


}
.ba{
  margin-top: 0;
}
.top{
  margin-bottom: 0;
}

@media screen and (max-width: 1300px) {
  .flex-container {
    flex-direction: column;
  }
  .item1{
    width: 100%;
  }
  .item2{
    width: 100%;
  }
  .item3{
    width: 100%;
    margin: 0;
  }
  .titre{
    font-size: 20px;
    padding:  5px;
  }
  .Titre{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    height: 30%;

  }
  p{
    font-size: 15px;

  }
  .txt2{
    font-size: 15px;
    padding: 30px;
    margin: 0;
  }
  .titre{
   text-align: center;
  }

}






</style>
