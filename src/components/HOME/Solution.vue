<template>
  <div class="CTN">
    <div class="item">
      <div class="item1">
      </div>

      <div class="item2">
        <div class="itemC">

        <div class="card1">
          <div class="card11">
            <div class="txt">
            <h1>Besoin</h1>
            <h2>Utilisez Teklif pendant vos périodes de rush</h2>
            </div>
          </div>
        </div>
      <div class="card2">
        <div class="card22">
          <div class="txt">
          <h1>Matching</h1>
          <h2>Trouvez l’étudiant parfait pour votre mission </h2>
          </div>
        </div>

      </div>
        <div class="card3">
          <div class="card11">
            <div class="txt">
            <h1>Mise en relation</h1>
            <h2>Discuter directement avec l’étudiant de votre choix</h2>
            </div>
          </div>
        </div>
        <div class="card4">
          <div class="card22">
            <div class="txt">
            <h1>Rémunération</h1>
            <h2>Méthodes de paiement flexibles </h2>
            </div>
          </div>
        </div>
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
.CTN{
  display: flex;
  justify-content: center;
  align-items: center;
 width: 100%;
   height: 100vh;
  background-image: url("../../assets/back2.png");
  background-size: cover;
  background-repeat: no-repeat;


}
.item{
  width: 85%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: white;
  border-radius: 30px;
}
.item1{
  width: 100%;
  height: 100%;
  display: flex;
  background-image: url("../../assets/fuser.png");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px  0 0 20px;
}
.item2{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 0 20px 20px  0;


}
.itemC{
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 0 20px 20px  0;
  gap: 30px;
}


.card1{
  width: 100%;
  height: 25%;
  border-radius: 0 20px 0 0;

}
.card2{
  width: 100%;
  height: 25%;

  display: flex;
  justify-content: end;
  align-items: center;

}
.card3{
  width: 100%;
  height: 25%;




}
.card4{
  width: 100%;
  height: 25%;
  border-radius: 0 0 20px 0;
  display: flex;
  justify-content: end;
  align-items: center;



}
.card11{
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: start;
  font-size: 2em;
  color: white;
  font-weight: bold;
  background-color: #5B03E4;
  border-radius:  20px 20px 20px 20px;
}
.card22{

  width: 50%;
  height: 100%;
  display: flex;
  justify-content: start;
  font-size: 2em;
  color: white;
  font-weight: bold;
  background-color: #C03AFE;
  border-radius:  20px 20px 20px 20px;
}

.txt{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  text-align: center;
}
h2{
  width: 70%;
font-size: 15px;
}
h1{
  font-size: 35px;
}



@media screen and (max-width: 960px){
  .item{
    flex-direction: column;

  }
  .itemC{gap: 5px}
  .card11{
    font-size: 1.5em;
    width: 100%;
  }
  .card22{
    font-size: 1.5em;
    width: 100%;


  }
  







}

@media screen and (max-width: 900px){
  h1{
    font-size: 20px;
    margin: 0;
  }
  .txt{padding: 10px}


}








</style>
