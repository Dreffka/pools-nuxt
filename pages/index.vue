<template>
  <div class="main-screen">
    <div class="container-fluid">
      <div class="heading-right">
        <h1 class="pb-3">Clearly awe-inspiring</h1>
        <p class="pb-3">
          The Space Needle is safely open with limited capacity and industry-<br/>
          leading Elevating Clean standards.</p>
        <button class="btn-small btn-lightgreen">В БАССЕЙНЫ</button>
      </div>
      <nuxt-link to="Contacts">
        <div class="heading-left">
          <div class="group-text">
            <h5>График работы</h5>
            <p>Понедельник - Пятница</p>
            <h5>Время работы</h5>
            <p>09:00 - 18:00</p>
            <h5>Выходные</h5>
            <p>Суббота, Воскресенье</p>
            <p class="pt-3">Перейти в контакты</p>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>

<!--  <section class="container-fluid">-->
<!--    <div class="card margin-cards">-->
<!--      <div class="row no-gutters">-->
<!--        <div class="col-md-6">-->
<!--          <img src="./assets/img/pool_1.jpg" class="card-img" alt="...">-->
<!--        </div>-->
<!--        <div class="col-md-6 align-self-center">-->
<!--          <div class="card-body">-->
<!--            <h5 class="card-title">Бассейны</h5>-->
<!--            <p class="card-text mt-4 mb-4">This is a wider card with supporting text-->
<!--              below as a natural lead-in to additional content.-->
<!--              This content is a little bit longer.</p>-->
<!--            <button class="btn-small btn-lightgreen">Перейти</button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

<!--  </section>-->


</template>

<script>

export default {

  data() {
    return {

    }
  }
}
</script>

<style scoped>

a {
  text-decoration: none;
}
.main-screen {
  background-image: url(/img/bh-header.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 94vh;
  position: relative;
}
.heading-right {
  position: absolute;
  right: 10%;
  margin-top: 5%;
  text-align: right;
  color: #fff;
  text-shadow: 2px 2px 3px black;
}
.heading-right > h1 {
  text-transform: uppercase;
}
.heading-left{
  background-color: rgba(58,64,81,0.6);
  position: absolute;
  left: 0;
  bottom: 10%;
  padding: 30px 90px 30px 70px;
  transition-duration: 0.4s;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.heading-left:hover{
  transition-duration: 0.4s;
  background-color: rgba(58,64,81,0.8);
}
.group-text{
  color: #fff;
}
.group-text > h5 {
  text-transform: uppercase;
}

.margin-cards{
  margin-top: 120px;
  margin-bottom: 120px;
}

.card {
  background-color: #f8fdff;
  border: none;
  box-shadow: 5px 5px 5px rgba(22, 22, 22, 0.12);
}



</style>
