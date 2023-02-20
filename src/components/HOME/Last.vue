<template>
<div class="CTN">
  <div class="item1">


  </div>
  <div class="item2">
    <h1>Rejoignez le reseaux Teklif</h1>

  </div>
  <div class="item3">
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
</template>

<script>
export default {
  name: "Last"
}
</script>

<style scoped>
.CTN{
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  margin-bottom: 30px;

}
.item1{
 background-image: url("../../assets/fin.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 500px;
  border-radius: 20px;

}
.item2{
  text-align: center;
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
.item3{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

}
.btn {
  display: flex;
  justify-content: center;
  width: 35%;
  height: 50%;
  gap: 40px;
  padding: 0;
}

@media screen and (max-width: 768px) {
  .CTN{
    display: flex;
    flex-direction: column;
    margin-top: 70px;

  }
  .item1{
    display: none;


  }
  .item2{
    text-align: center;
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
  .item3{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

  }
  .btn {
    display: flex;
    justify-content: center;
    width: 35%;
    height: 50%;
    gap: 40px;
    padding: 0;
  }

  }

  @media screen and (max-width: 1500px) {
    img{
      width: 100%;
      height: 100%;
    }

}
@media screen and (max-width: 900px){
  .btn{

    width: 100%;
    height: 100%;

    padding: 0;
  }
  h1{
    font-size: 1.5rem;
  }
}




@media  screen and (max-width: 600px){
  .btn{

    width: 100%;
    height: 100%;

    padding: 0;
  }
  h1{
    font-size: 1.5rem;
  }

}





</style>
