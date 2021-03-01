<template>
<div>

  <div class="container-fluid space-bot">

    <div>
    <b-carousel
      v-model="slide"
      :interval="10000"
      controls
      indicators
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <b-carousel-slide :img-src="$route.params.slider_image1" :alt="$route.params.slider_image1_alt"></b-carousel-slide>
      <b-carousel-slide :img-src="$route.params.slider_image2" :alt="$route.params.slider_image2_alt"></b-carousel-slide>
      <b-carousel-slide :img-src="$route.params.slider_image3" :alt="$route.params.slider_image3_alt"></b-carousel-slide>

                  <!-- slider_image1: pool.slider_image1,
                  slider_image2: pool.slider_image2,
                  slider_image3: pool.slider_image3,
                  : pool.slider_image1_alt,
                  slider_image2_alt: pool.slider_image2_alt,
                  slider_image3_alt: pool.slider_image3_alt,
                  gallery_image1: pool.gallery_image1,
                  gallery_image2: pool.gallery_image2,
                  gallery_image3: pool.gallery_image3,
                  gallery_image1_alt: pool.gallery_image1_alt,
                  gallery_image2_alt: pool.gallery_image2_alt,
                  gallery_image3_alt: pool.gallery_image3_alt, -->
    </b-carousel>

  </div>

    <div class="row cards-product">
      <div class="col-md-6">
        <h1>{{$route.params.title_rus}}</h1>
        <p class="mb-5 mt-5">{{$route.params.short_description_rus}}</p>
        <p class="pb-3">Цена: от <span class="params-pool">{{$route.params.price}}</span>$</p>
        <Modal/>
      </div>
      <div class="col-md-6 justify-content-center">
        <img :src="$route.params.photo" class="pool-img" :alt="$route.params.photo_alt">
        <p class="params-pool">{{ $route.params.length }}м x {{ $route.params.width }}м x {{ $route.params.height }}м </p>
      </div>
    </div>

    <div class="col-md-6 cards-product">
      <p>{{$route.params.description_rus}}</p>
    </div>


  </div>

</div>
</template>

<script>
  export default {
    data() {
      return {

        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>

.cards-product {
  margin: 150px 0;
}
.pool-img {
  width: 100%;
}
.row {
  align-items: center;
}
.params-pool {
  text-align: center;
  font-weight: 500;
  font-size: 24px;
}

</style>

<style>
.img-fluid {
  height: 550px !important;
}
.carousel-indicators{
z-index: 3;
}
</style>


