<template>
    <div class="container-fluid">
    <div class="mt-5 mb-5">
        <h2>Модели бассейнов</h2>
    </div>

    <div class="row pool-list">
        <div class="col-12 col-md-6 col-lg-4 col-xl-3" v-for="(pool) in pools">
            <div class="models-pools">
                <a :href="pool.url">
                    <div class="pool-card-center">
                        <div class="pool-img-center">
                            <img :src="pool.image" class="pool-img" alt="">
                        </div>
                        <p class="card-pool-title">{{ pool.title }}</p>
                        <p class="card-pool-text">{{ pool.text }}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
    </div>
</template>

<script>



    export default {
    data() {
        return {
            pools: [
                {
                    image: '@/static/img/baden.png',
                    title: 'Баден',
                    text: '2,00м х 2,00м х 0,90м',
                    url: '#'
            },
            {
                    image: './static/img/eden.png',
                    title: 'Эден',
                    text: '2,00м х 2,00м х 0,90м',
                    url: '#'
            },
            {
                    image: '/static/img/balaton.png',
                    title: 'Балатон',
                    text: '2,00м х 2,00м х 0,90м',
                    url: '#'
            },
            {
                    image: '/static/img/mayami.png',
                    title: 'Майами',
                    text: '2,00м х 2,00м х 0,90м',
                    url: '#'
            },
            {
                    image: '/static/img/baden.png',
                    title: 'Баден',
                    text: '2,00м х 2,00м х 0,90м',
                    url: '#'
            },
            {
                    image: '/static/img/eden.png',
                    title: 'Эден',
                    text: '2,00м х 2,00м х 0,90м',
                    url: '#'
            },
            {
                    image: '/static/img/balaton.png',
                    title: 'Балатон',
                    text: '2,00м х 2,00м х 0,90м',
                    url: '#'
            },
            {
                    image: '/static/img/mayami.png',
                    title: 'Майами',
                    text: '2,00м х 2,00м х 0,90м',
                    url: '#'
            }
            ]
        }
    }
    }
</script>

<style scoped>

    .pool-list {
        margin-top: 50px;
        margin-bottom: 50px;
    }
    .models-pools {
        box-shadow: 0 5px 5px -5px rgba(0, 0, 0, .5);
        border-radius: 15px;
        margin: 30px 0;
        width: 100%;
        height: 465px;
        background: #ebf9ff;
        color: #333;
        position: relative;
        cursor: pointer;
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
        color: #333;
    }

    .card-pool-text {
        font-weight: 300;
        font-size: 18px;
        text-align: center;
        color: #333;
    }

</style>
