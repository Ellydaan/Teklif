<template>
  <img  class = "img" :src="url" alt="" />
</template>
<script>
import { storage } from '@/main'
import { ref, getDownloadURL } from 'firebase/storage';

export default {
  props: {
    path: String,
  },
  data: () => {
    return {
      url: 'https://via.placeholder.com/140x100',
    };
  },
  mounted() {
    getDownloadURL(ref(storage,this.path)).then(
        (download_url) => (this.url = download_url)
    )
  }
};
</script>
<style scoped>
.img{
  height: 50vh;
  width: 100%;

}
</style>
