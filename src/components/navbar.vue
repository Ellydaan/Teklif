<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"><img class="logo" src="../assets/logo_tek.png" alt="logo_tek"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Mission <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Etudiants</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Nos service</a>
        </li>
      </ul>
      <div class="navb-txt">
      <span class="navbar-text">
    <a href="#" class="myButton">Crée un compte</a>
    </span>
      <span class="navbar-text">
    <a href="#"  class="connect">Connection</a>
    </span>
      </div>
    </div>
  </nav>

</template>




<script>
export default {
  name: 'navbar',
  methods: {


}



};
</script>



<style scoped>
.logo{
  width: 150px;
  height: 10%;
}
.bg-light{
  background-color: #F2E6E2 !important;
}
.nav-link:hover{
  color: #FF7D5A !important;

}
.navb-txt{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;

}
.myButton {
  background-color:#ff7e5a;
  border-radius:28px;
  border:1px solid #ff7e5a;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:17px;
  padding:16px 31px;
  text-decoration:none;
  text-shadow:0px 1px 0px #b23e35;
}
.myButton:hover {
  background-color:#fcaf9c;
}
.myButton:active {
  position:relative;
  top:1px;
}
.connect{

  text-decoration: none;
}
.connect:hover{
  color: #FF7D5A !important;
}



</style>
