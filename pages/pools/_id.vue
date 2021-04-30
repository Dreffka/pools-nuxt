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

      <b-carousel-slide :img-src="SINGLE_POOL.slider_image1" :alt="SINGLE_POOL.slider_image1_alt"></b-carousel-slide>
      <b-carousel-slide :img-src="SINGLE_POOL.slider_image2" :alt="SINGLE_POOL.slider_image2_alt"></b-carousel-slide>
      <b-carousel-slide :img-src="SINGLE_POOL.slider_image3" :alt="SINGLE_POOL.slider_image3_alt"></b-carousel-slide>

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
        <h1>{{ SINGLE_POOL.title_rus }}</h1>
        <p class="mb-5 mt-5">{{ SINGLE_POOL.short_description_rus }}</p>
        <p class="pb-3">Цена: от <span class="params-pool">{{ SINGLE_POOL.price }}</span></p>
        <Modal/>
      </div>
      <div class="col-md-6 justify-content-center">
        <img :src="SINGLE_POOL.photo" class="pool-img" :alt="SINGLE_POOL.photo_alt">
        <p class="params-pool">{{ SINGLE_POOL.length }}м x {{ SINGLE_POOL.width }}м x {{ SINGLE_POOL.height }}м </p>
      </div>
    </div>

    <div class="col-md-6 cards-product">
      <p>{{ SINGLE_POOL.description_rus }}</p>
    </div>
  </div>

</div>
</template>

<script>
  import { mapGetters} from 'vuex'

  export default {
    data() {
      return {
        id: this.$route.params.id,
        slide: 0,
        sliding: null
      }
    },

    created: function () {
            this.$store.dispatch('GET_SINGLE_POOL_FROM_API', this.id)
		},
		computed: {
            ...mapGetters(['SINGLE_POOL'])
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


