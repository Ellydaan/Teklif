<template>
  <div class="CTN">

  <div class="flex-container">
    <div class="item1">
      <div class="item_txt">

      <p>Je suis une entreprise</p>
      <h1>JE CHERCHE UN ETUDIANT</h1>
        <p>dynamique et qualifié pour répondre à mon besoin</p>
        <a href="#" class="btn_txt">Trouver un etudiant </a>
        </div>

    </div>
    <div class="item2"> <div class="item_txt">
      <p>Je suis étudiant</p>
      <h1>JE CHERCHE UNE ENTREPRISE</h1>
      <p>rapide et rémunérée, dans mon domaine d’étude</p>
      <a href="#" class="btn_txt">Trouver une mission</a>

    </div></div>

  </div>
  </div>
</template>

<script>
export default {
  name: "Heros"
}
</script>

<style scoped>


.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;



}
.item1 {

  color: white;
  width: 50%;
  background:url(../assets/item1.png) no-repeat center center ;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

}
p{
  margin-bottom: 15px ;
}
h1{
  font-size: 2rem

}
.item_txt{
  text-align: center;
  width: 60%;
  height: 50%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


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


.item2 {

  color: white;
  width: 50%;
  background:url(../assets/item2.png) no-repeat center center ;


  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 1300px) {
  .flex-container {
    flex-direction: column;
    height: 100vh;
    gap: 30px;


  }
  .item1 {
    width: 100%;
    height: 100vh;
  }
  .item2 {
    width: 100%;
    height: 100vh;
  }
  .item_txt{
    width: 90%;
    height: 70%;
  }
  h1{
    font-size: 1.5rem;
  }


}
</style>
