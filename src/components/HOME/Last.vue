<template>
<div class="CTN" >
  <div class="ctn">
    <p class="Titre"> Venez rejoindre l'aventure teklik</p>
  </div>
  <div class="ctn1">
    <p class="ST"> Vous avez des questions ?</p>
  </div>
  <div class="ctn2">
   <div class="gauche">

     <a class="btn" href="#">I am a button</a>
   </div>
<div class="droite">

  <a class="btn" href="#">I am a button</a>
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
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  height: 100%;
  width: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

}
.ctn{
  text-align: center;
  font-size:50px ;
  width: 50%;
}

.ctn1{

  font-size:40px ;

}
.ctn2{
  display: flex;

  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 15px;
  gap: 20px;

}
.gauche{

  text-align: center;

}
.droite{

  text-align: center;

}

.btn {

  display: inline-block;
  padding: 0.9rem 1.8rem;
  font-size: 16px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  position: relative;
  background-color: black;
  text-decoration: none;
  overflow: hidden;
  z-index: 1;
  font-family: inherit;
}

.btn::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(252, 70, 100);
  transform: translateX(-100%);
  transition: all .3s;
  z-index: -1;
}

.btn:hover::before {
  transform: translateX(0);
}

@media screen and (max-width: 1300px){
  .ctn{
   width: 100%;
  }

.ctn1{

  font-size: 20px;
  width: 100%;
}

  .Titre{
    font-size: 25px;

  }
  .ST{
    text-align: center;
  }
}






</style>
