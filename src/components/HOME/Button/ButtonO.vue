<template>

  <a class="btn" href="#">I am a button</a>
</template>

<script>
export default {
  name: "Button"
}
</script>

<style scoped>
.btn {
  display: inline-block;

  font-size: 16px;
  font-weight: 700;
  color: white;
  border: 3px solid #FF7D5A;
  cursor: pointer;
  position: relative;
  background-color: transparent;
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
  background-color: #FF7D5A;
  transform: translateX(-100%);
  transition: all .3s;
  z-index: -1;
}

.btn:hover::before {
  transform: translateX(0);
}

</style>
