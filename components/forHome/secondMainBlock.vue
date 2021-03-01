<template>
    <section class="m-self">

        <h2 class = "text-align-center">Наши предложения</h2>

        <div class=" row justify-content-center content-block">

          <div class="col-md-4 first-block">
            <nuxt-link class="our-proposals" to="/pools/standart">
              <div class="content-inner-block">
                <h3>Бассейны</h3>
                <!-- <span>Разных форм</span>
                <span>разных назначений</span> -->
              </div>
            </nuxt-link>
          </div>

          <div class="col-md-4 second-block">
            <nuxt-link class="our-proposals" to="/watering">
              <div class="content-inner-block">
                <h3>Поливы</h3>
                <!-- <span>Качественные материалы</span>
                <span>Качественная работа</span> -->
              </div>
            </nuxt-link>
          </div>

          <div class="col-md-4 third-block">
            <nuxt-link class="our-proposals" to="/ponds">
              <div class="content-inner-block">
                <h3>Пруды</h3>
                <!-- <span>Любого дизайна</span>
                <span>Любой расцветки</span> -->
              </div>
            </nuxt-link>
          </div>
        </div>
    </section>
</template>


<style scoped>

    h2{
        position: relative;
        font-weight: 400;
        font-size: 40px;
        color: #072f59;
        text-align: center;
        text-transform: capitalize;
    }


     h2:before{
        content: '';
        position: absolute;
        display: block;
        width: 20%;
        height: 2px;
        background: #002059;
        right: 40%;
        top: 80px;
        /* margin: 0px 50px; */
}

    .m-self{
        margin: 100px 20px;
    }

    .our-proposals{
        position: relative;
        display: block;
        height: 450px;
        /*background-image: url(/img/tech/boy-jumps-in-pool.jpg);*/
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin: 10px;
        background-color: rgba(253,253,253, 0.1);
        background-blend-mode: color;
        transition: all 0.5s;
    }

    .our-proposals:hover{
        background-color: rgba(7,47,89, 0.1);
    }

    .first-block .our-proposals {
        background-image: url(/img/tech/pool-block-photo2.jpg);
    }

    .second-block .our-proposals {
        background-image: url(/img/tech/watering.jpg);
    }

    .third-block .our-proposals {
        background-image: url(/img/tech/pond3.jpeg);
    }

    .content-block{
        margin-top: 80px;
    }

    .content-inner-block{
        bottom: 20px;
        /* left: 20px; */
        position: absolute;
        padding: 15px;
        background: white;
        /* min-width: 70%; */
    }

    .content-inner-block h3{
        color: #072f59;
        font-weight: 600;
        /*font-size: 22px;*/
    }

    .content-inner-block span{
        color:grey;
        text-decoration: underline;
        font-weight: 100;
        text-transform: uppercase;
        font-size: 13px;
    }

@media screen and (max-width: 900px) {

h2::before{
  background: rgba(255, 255, 255, .0);
}
}
</style>
