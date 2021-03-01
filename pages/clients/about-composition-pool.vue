<template>
  <div>
    <section class="main-image-about-composition"></section>
    <section class="container-fluid space-bot">
      <div class="background-shadow-block"></div>
      <div class = "section-third-main-inner d-flex flex-column justify-content-center align-items-center">
        <h1 class="mb-2 mt-5">Про бассейны</h1>

        <p class="mb-5 centring">Принимая решение о покупке бассейна, вы столкнетесь с проблемой выбора</p>

        <p class="block-description">
          Нам есть, что вам предложить. С 2006 года мы заслуженно занимаем уверенную позицию на Украинском рынке.<br>
           При создании или установке бассейнов мы используем в своём арсенале наиболее актуальные технологии,
           оборудование высокого качества и современные материалы, благодаря чему достигаем оптимального сочетания
           комфортабельности, внешней красоты и элегантности, с эргономичностью, долговечностью и их исключительной
           прочностью.<br> Чаши бассейнов соответствуют международным стандартам качества и имеют гарантийный срок до 50 лет.<br>
           Чаши от 2 до 50 метров длиной.
        </p>

        <div class="why-us mt-3 mb-3">
          <h2 class="centring">Почему мы?</h2>
          <p class="centring">Наша компания со дня своего основания завоевала лидерские позиции, на которых стоит по сегодняшний день.</p>
          <tabs-about/>
          <about-pools/>
        </div>
      </div>
    </section>




  </div>
</template>
<script>
import AboutPools from '../../components/forAbout/AboutPools.vue'
export default {
  components: { AboutPools },
   head() {
    return {
      title: 'Про бассейны | Грин Офис бассейны поливы пруды Запорожье'
    }
  },
}
</script>


<style scoped>

.main-image-about-composition{
  background-image: url(/img/bh-header.jpg);
  background-position-y: 60%;
  background-repeat: no-repeat;
  background-size: cover;
  height:50vh;
  position: relative;
  margin: 0;
  background-color: rgba(7,47,89, 0.15);
  background-blend-mode: color;
}

.why-us{
  padding-top: 35px;

}
.centring {
  text-align: center;
  margin: 30px
}
.why-us h4 {
  padding: 15px 0;
  margin-top: 50px;

}

.img-center-client{
  display: flex;
}
.img-center-client img {
 max-width: 100%;
}
</style>
