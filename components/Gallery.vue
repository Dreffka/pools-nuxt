<template>
  <div>
<!--      <p>{{images}}</p>-->

    <client-only>
      <LightGallery
        :images="images"
        :index="index"
        :disable-scroll="true"
        @close="index = null"
      />
    </client-only>
    <ul class="row">
      <li v-for="(image, idx) in images"
          :key="idx"
          @click="index = idx"
          class="col-lg-3 col-md-4 col-11"
      >
          <img
            :src="image.url"
            :alt="image.photo_alt"
            class="img-gallery"
          />
      </li>
    </ul>

  </div>
</template>


<script>


export default {


  data() {
    return {
      images: [],
      index: null,
    }
  },
    async mounted() {
      const res = await fetch(
        'https://admin.greenoffice.in.ua/api/portfolio'
      )
      const images = await res.json()
      this.images = images.data
    },
}


</script>

<style scoped>
  .img-gallery {
    width: 100%;
    height: 250px;
    margin: 15px;
    border-radius: 5px;
    box-shadow: 0 5px 5px rgba(22, 22, 22, 0.3);
    transition: 0.5s;
  }
  .img-gallery:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
</style>
