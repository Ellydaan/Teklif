<template>
  <div>
    <form>
      <input type="file" ref="image"/>
      <button @click="uploadImage">Enregistrer l'image</button>
    </form>
  </div>
</template>

<script>
import 'firebase/storage';
import firebase from "firebase/compat/app";

export default {
  name: 'ImageUpload',
  data () {
    return {
      storageRef: firebase.storage().ref()
    }
  },
  methods: {
    async uploadImage() {
      const image = this.$refs.image.files[0];
      const imageRef = this.storageRef.child(`images/${image.name}`);
      await imageRef.put(image);
    }
  }
}
</script>
