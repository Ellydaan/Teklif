<template>
<div class="ctn">

  <div class="item1">

    <div class="ctn_txt">

      <div class="ctn-txt">

      <h1 class="titre"> Collaborez avec les meilleurs étudiants en quelques clics </h1>
      <p class="txt"> Les étudiants vous accompagnent dans la concrétisation de vos projets. Grâce à leur dynamisme et à leur maîtrise de la théorie, ils sauront apporter nouveauté et rigueur.
        Par le biais de Teklif, vous avez accès à un large panel d’étudiants, qui pourront devenir de précieux collaborateurs.</p>
    </div>

    </div>

      <img class="ctn_img" src="../assets/last1.png" alt="entre">



  </div>




  <div class="item2 ">

    <div class="ctn_txt1">

      <div class="ctn-txt">

        <h1 class="titre"> Collaborez avec les meilleurs étudiants en quelques clics </h1>
        <p class="txt"> Les étudiants vous accompagnent dans la concrétisation de vos projets. Grâce à leur dynamisme et à leur maîtrise de la théorie, ils sauront apporter nouveauté et rigueur.
          Par le biais de Teklif, vous avez accès à un large panel d’étudiants, qui pourront devenir de précieux collaborateurs.</p>
      </div>
    </div>

    <img class="ctn_img" src="../assets/last2.png" alt="entre">



  </div>

  <div class="item3">
    <div class="gauche">
      Je dépose une mission

    </div>
    <div class="droite">
      Je trouve une mission
    </div>
  </div>






  </div>
</template>

<script>
export default {
  name: "Last"
}
</script>

<style scoped>
.ctn{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin-top: 150px;

}
.item1{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
  gap: 15px;
  margin-bottom: 20px;

}
.item2{
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 50%;
  gap: 15px;
  margin-bottom: 20px;
}
.ctn_img{
  width: 50%;

}
.txt{
  width: 95%;
  font-size: 24px;
 color: #FFFFFF;

text-align: center;
}
.ctn_txt{

  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #E94E1B;

}
.ctn_txt1{

  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2A7FDB;

}
.ctn-txt{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

}


.titre{
  color: white;

  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 30px;
  width: 90%;
  text-align: center;

}
.item3{
  width: 100%;

  height: 100%;
  display: flex;
  flex-direction: row;


 padding-bottom: 10px;
}
.gauche{
  display: flex;
  background-color: red;
  width: 50%;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #FFFFFF;
  margin: 10px;
}
.droite{
  background-color: blue;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #FFFFFF;
  margin: 10px;
}
@media screen and (max-width: 1300px) {
h1 {
  font-size: 30px;
  line-height: 150%;
}

  .ctn-txt{
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }
  .item1{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

  }
  .ctn_txt{
    width: 100%;
    height:100%;
  }
  .ctn_txt1{
    width: 100%;
    height:100%;
  }
  .ctn-txt{
    width: 80%;

  }
  .ctn_img{
    width: 100%;
  }
  .ctn{
    margin-top: 0;
  }
  .titre{
    width: 100%;
    margin-bottom: 20px;
    font-size: 20px;
    padding-left: 30px;

  }
  .txt{
    width: 100%;
    font-size: 20px;
  }
  .ctn-txt{
    width: 100%;
    padding: 15px;
  }
  .gauche{
    font-size: 13px;
   padding: 10px;


  }
  .droite{
    font-size: 13px;

  }



}

</style>
