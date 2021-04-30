<template>
    <div class="container-fluid">
    <div class="mt-3 mb-5">
        <h1>Модели бассейнов "Стандарт"</h1>

    </div>

    <div class="row pool-list">
        <div class="col-12 col-md-6 col-lg-4 col-xl-3" v-for="pool in allStandartPools.data" :key="pool._id">
            <div class="models-pools">
                <nuxt-link :to="'/pools/'+pool.id" >
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
import { mapGetters, mapActions } from 'vuex'

export default {
   head() {
    return {
      title: 'Бассейны стандарт | Грин Офис бассейны поливы пруды Запорожье'
    }
  },

  computed: mapGetters(['allStandartPools']),
  methods: mapActions(['fetchStandartPools']),

  async mounted() {
   this.fetchStandartPools()
  }
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
