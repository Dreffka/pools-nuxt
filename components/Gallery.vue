<template>
  <div>
    <h3 class="">Галерея</h3>

    <client-only>
      <LightGallery
        :images="images"
        :index="index"
        :disable-scroll="true"
        @close="index = null"
      />
    </client-only>


    <ul class="row">
      <li v-for="(img, imgIndex) in images"
          :key="imgIndex"
          @click="index = imgIndex"
          class="col-lg-3 col-md-4 col-6"
      >

        <a href="#">
          <b-img-lazy
            :src="img"
            alt=""
            class="img-gallery"
          />
        </a>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      images: [
        'img/gallery/1.jpg',
        'img/gallery/2.jpg',
        'img/gallery/3.jpg',
        'img/gallery/4.jpeg',
        'img/gallery/5.jpeg',
        'img/gallery/6.jpeg',
        'img/gallery/7.jpg',
        'img/gallery/8.jpg',
        'img/gallery/9.jpg',
        'img/gallery/10.jpg',
        'img/gallery/11.jpg',
        'img/gallery/12.jpg',
        'img/gallery/13.jpg',
        'img/gallery/14.jpg'

      ],
      index: null
    }
  }

}
</script>

<style scoped>
  .img-gallery {
    max-width: 250px;
    max-height: 300px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0 5px 5px rgba(22, 22, 22, 0.3);
    transition: 0.5s;
  }
  .img-gallery:hover {
    transform: scale(1.1);
  }
</style>
