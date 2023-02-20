<template>
  <div class="CTN">
    <div class="ctn">
      <div class="ctnitem">

    <div class="item1">
      <h1><span>Trouvez l’étudiant</span> qu’il vous faut</h1>
      <p>Teklif propose une liste d’étudiants issus d’Universités ou de Grandes Ecoles et certifient leur aptitude à réaliser vos missions. Grâce à leur énergie et à leur maîtrise de la théorie, ils sauront apporter nouveauté et rigueur aux entreprises. Teklif offre ainsi l’accès à un large panel d’étudiants, qui pourront devenir de précieux collaborateurs.
      </p>

    </div>
    <div class="item2"><img src="../../assets/etu.png" alt="etud"></div>
      </div>
      <div class="ctnitem">

        <div class="item2">
          <img src="../../assets/coupe.png" alt="couple">

        </div>
        <div class="item1">
          <h1><span>Mettez vos enseignements</span> en pratique</h1>
          <p> Grâce à Teklif, réalisez des missions qui vous permettront de gagner en expérience tout en étant rémunéré. Les missions sont l’opportunité parfaite de se faire connaître auprès d’un futur employeur.
          </p>

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
.CTN{
  display: flex;
 flex-direction: row;
  padding: 50px 0;
  width: 100%;
  height: 100%;
}
.item1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 50%;
  height: 100%;


}
.ctnitem{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}
.ctn{
  display: flex;
 flex-direction: column;
  width: 100%;
  height: 100%;

}

.item2{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;


}
p{

  font-size: 20px;
  color: black;
  font-weight: 500;
  width: 80%;
  height: 50%;
}
h1{
  width: 80%;
  color: #000000;
  font-size: 40px;
  font-weight: 600;
  margin: 0;
  padding-bottom: 30px;
}
span{
  color: #C03AFE;
}
@media screen and (max-width: 670px) {
  .ctnitem{
    flex-direction: column;
  }
  .item1{
    width: 100%;
    height: 50%;
  }
  .item2{
    width: 100%;
    height: 50%;
  }
  img{
    width: 100%;
    height: 100%;
  }


}
@media screen and (max-width: 900px) {

  img{
    width: 100%;
    height: 100%;
  }

}




</style>
