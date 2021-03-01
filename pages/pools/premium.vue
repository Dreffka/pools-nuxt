<template>
    <div class="container-fluid">
    <div class="mt-3 mb-5">
        <h1>Модели бассейнов "Премиум"</h1>
    </div>

    <div class="row pool-list">
        <div class="col-12 col-md-6 col-lg-4 col-xl-3" v-for="pool in pools" :key="pool.id">
            <div class="models-pools">
                <nuxt-link :to="{ name: 'pools-id', params: {
                  id: pool.id,
                  length: pool.length,
                  width: pool.width,
                  height: pool.height,
                  title_rus: pool.title_rus,
                  photo: pool.photo,
                  photo_alt: pool.photo_alt,
                  price: pool.price,
                  description_rus: pool.description_rus,
                  short_description_rus: pool.short_description_rus,
                  slider_image1: pool.slider_image1,
                  slider_image2: pool.slider_image2,
                  slider_image3: pool.slider_image3,
                  slider_image1_alt: pool.slider_image1_alt,
                  slider_image2_alt: pool.slider_image2_alt,
                  slider_image3_alt: pool.slider_image3_alt,
                  gallery_image1: pool.gallery_image1,
                  gallery_image2: pool.gallery_image2,
                  gallery_image3: pool.gallery_image3,
                  gallery_image1_alt: pool.gallery_image1_alt,
                  gallery_image2_alt: pool.gallery_image2_alt,
                  gallery_image3_alt: pool.gallery_image3_alt,

                } }" >
                    <div class="pool-card-center">
                        <div class="pool-img-center">
                            <img :src="pool.photo" class="pool-img" :alt="pool.photo_alt">
                        </div>
                        <p class="card-pool-title">{{ pool.card_title_rus }}</p>
                        <p class="card-pool-text">{{ pool.length }}м x {{ pool.width }}м x {{ pool.height }}м </p>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>

    </div>
</template>

<script>


export default {
  head() {
    return {
      title: 'Бассейны премиум | Грин Офис бассейны поливы пруды Запорожье'
    }
  },
  data(){
    return {
      pools: [],
    }
  },

  async mounted() {
    const res = await fetch(
      'https://admin.greenoffice.in.ua/api/pools/2'
    )
    const pools = await res.json()
    this.pools = pools.data
  },
  // call fetch only on client-side
  // fetchOnServer: false
}
</script>


<style scoped>

    .pool-list {
        margin-top: 50px;
        margin-bottom: 50px;
    }
    .models-pools {
        /*box-shadow: 0 5px 5px -5px rgba(0, 0, 0, .3);*/
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .1);
        border-radius: 15px;
        margin: 30px 0;
        width: 100%;
        height: 465px;
        background: #ebf9ff;
        color: #333;
        position: relative;
        cursor: pointer;
        transition: 0.7s;
    }
    .models-pools:hover {
      /*box-shadow: 0 5px 5px -5px rgba(0, 0, 0, .5);*/
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .3);
      /*transform: rotate3d(1, 2.0, 3.0, 10deg);*/
      transform: translateY(-1em);
    }

    .pool-card-center {
        position: absolute;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%,0);
        bottom: 75px;
        max-width: 220px;
    }

    .pool-img-center {
        position: relative;
        height: 272px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .pool-img {
        display: block;
        width: 90%;
        max-width: 100%;
    }

    .card-pool-title {
        font-size: 30px;
        margin-bottom: 15px;
        font-weight: 500;
        text-align: center;
        color: #333;
    }

    .card-pool-text {
        font-weight: 300;
        font-size: 18px;
        text-align: center;
        color: #333;
    }

</style>
