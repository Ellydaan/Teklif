<template>
  <div>
    <input type="file" ref="fileInput" @change="uploadImage"/>
    <button @click="triggerFileInput">Upload Image</button>
  </div>
</template>

<script>

import 'firebase/storage'
import 'firebase/firestore'
import firebase from "firebase/compat/app";

export default {
  name: 'ButtonImg',
  data() {
    return {
      db: firebase.firestore()
    }
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click()
    },
    async uploadImage() {
      const file = this.$refs.fileInput.files[0]
      const name = file.name
      const metadata = {
        contentType: file.type
      }
      const storageRef = firebase.storage().ref()
      const uploadTask = storageRef.child(`images/${name}`).put(file, metadata)

      uploadTask.on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot) => {
            // Handle progress state changes
          },
          (error) => {
            // Handle failed upload
          },
          async () => {
            // Handle successful upload
            const url = await uploadTask.snapshot.ref.getDownloadURL()
            await this.db.collection("entreprise").doc().set({
              imageUrl: url
            })
          }
      )
    }
  }
}
</script>
