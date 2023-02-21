<template>
  <div class="CTN">
    <div class="item1">
      <div class="titre">
        <h1>Teklif, c’est avant tout <span> une opportunité</span> </h1>
        <h2>
          Rejoignez le réseau Teklif, où étudiants et <span>entreprises</span>
          se retrouvent pour <span>collaborer</span></h2>
        <div class="btn">
        <button class="mission">
          Déposer une mision
        </button>
          <button class="etudiant">
            Déposer une mision
          </button>

      </div>
      </div>
    </div>
  </div>

</template>

<script>
import ButtonO from "@/components/HOME/Button/ButtonO";
import ButtonB from "@/components/HOME/Button/ButtonB";

export default {
  name: "Heros",
  components: {ButtonO,ButtonB},
}
</script>

<style scoped>
.CTN {
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background-image: url("../../assets/hdr.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;


}
.item1 {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}
.titre {
  width: 80%;
  height: 50%;

  display: flex;
flex-direction: column;



}
.item2 {
  width: 50%;
  height: 100%;

}
button {
  border: none;
  background-color: seagreen;
  color: white;
  font-size: 1.15rem;
  font-weight: 500;
 width: 30%;
  height: 70px;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transform: translate(1) translate(0, 0);
  transition: transform 225ms, box-shadow 225ms;
}

button:hover {
  transform: scale(1.05) translate(0, -0.15rem);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.35);
}

button:active {
  transform: scale(1) translate(0, 0.15rem);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
h1 {
  font-size: 2.5rem;
  font-weight: 500;
  color: #000000;
 margin-bottom: 20px;
}
h2 {
  font-size: 1.5rem;
  font-weight: 500;
  color: #000000;
  margin-bottom: 80px;
}
.btn {
  display: flex;
  justify-content: start;
  width: 100%;
  height: 50%;
  gap: 40px;
  padding: 0;
}
.mission {
  width: 40%;
  height: 70px;
  background-color: #5B03E4;
  color: white;
  font-size: 1.15rem;
  font-weight: 500;
}
.etudiant {
  width: 40%;
  height: 70px;
  background-color: #C03AFE;
  color: white;
  font-size: 1.15rem;
  font-weight: 500;
}

span{
  color: #5B03E4;
}


@media screen and (max-width: 960px) {
  .CTN {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 50px;


  }
  .titre {
    width: 100%;
    height: 100%;
  }
  .item1 {
    width: 100%;
    height: 100%;
    padding: 30px;
  }


}





</style>
