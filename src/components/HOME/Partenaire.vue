<template>
  <div class="CTN">

    <div class="card">
      <div class="titre">
        <h1><span>Domaines d’expertise  </span>des étudiants</h1>
      </div>

      <div class="CTNcard">
        <div class="Cardd">
          <img src="../../assets/roue.png"  alt="roue">
          <p>Sciences
            Ingénierie</p>

        </div>
        <div class="Cardd">
          <img src="../../assets/phone.png" alt="phone">
          <p>Marketing
            Communication</p>
        </div>
        <div class="Cardd">
          <img src="../../assets/dev.png" alt="ordinateur">
          <p>Informatique</p>
        </div>
        <div class="Cardd">
          <img src="../../assets/art.png" alt="art">
          <p>Design
            Création</p>
        </div>
        <div class="Cardd">
          <img src="../../assets/arg.png" alt="arg">
          <p>Économie
            Gestion</p>
        </div>
        <div class="Cardd">
          <img src="../../assets/adn.png" alt="adn">
          <p>Santé
            Biologie</p>
        </div>
      </div>


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

.CTN {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 40px;
  margin-top: 5%;
}
h1{
  color: black;
  font-size: 40px;
  font-weight: 600;
  margin: 0;
  text-align: center;
}

.card{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 90%;
  border: none;

}
.CTNcard{
  display: flex;
  justify-content: space-around;
align-items: flex-start;
  flex-wrap: wrap;
  width: 65%;
  height: 100%;
  padding-top: 70px;
  gap: 25px;
}
.Cardd{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 227px ;
  height: 252px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);


}
p{
  font-size: 20px;
  font-weight: 600;
  color: black;
  text-align: center;
}
span{
  color: #5B03E4;
}



</style>
