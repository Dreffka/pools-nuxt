<template>
  <section class = "section-second-main">

    <img class = "top-image-section2 image-section2" src="@/static/img/tech/water1.png" alt="">

    <img class = "bottom-image-section2 image-section2" src="@/static/img/tech/water4.png" alt="">
    <div class = "section-second-main-inner d-flex flex-column justify-content-center align-items-center">
      <h2>Узнайте больше о нас!</h2>

      <p>Фирма предлагает вашему вниманию стекловолоконные и бетонные бассейны, а, также, автоматические системы полива.
        Во-первых, бассейны помогают решать проблемы с опорно-двигательным аппаратом человека, ну а в знойные дни бассейн – это удовольствие!
        Наши бассейны соответствуют европейским стандартам качества, имеют отличные эксплуатационные характеристики. Учитывая интересы своей семьи,
        вы можете определиться, какие задачи должен выполнять ваш бассейн, соизмерить расходы на строительство, монтажные работы, цены на комплект оборудования и расходы на эксплуатацию.
        </p>


      <nuxt-link class="button-style1 mt-2" to="/about"><span>больше о нас</span></nuxt-link>
    </div>


  </section>
</template>


<style scoped>
.section-second-main{
  position: relative;
  min-height: 300px;
  padding: 10px;
}


.section-second-main .button-style1{
  border-width: 1px;
  border-color: #3ca8f7;
  display: block;
  width: 40%;
  text-align: center;
  padding: 10px 40px;
  text-decoration: none;
}

.section-second-main .button-style1 span::before{
  display: none;
}

.section-second-main .button-style1 span{
  text-align: center;

}

.section-second-main .button-style1:hover{
  color:black;
}

.top-image-section2{
  top: 30px;
  height: 450px;
  left: -20px;
}

.image-section2{
  position: absolute;

}

.bottom-image-section2{
  height: 450px;
  bottom: 0;
  right: 0;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.section-second-main-inner{
  margin: 200px auto;
  max-width: 600px;
  position: relative;

}

.section-second-main-inner h2{
  display: inline-block;
  text-align: center;
  margin: 50px auto;
  position: relative;
  /*font-size: 35px;*/
  color: #072f59;
}


.section-second-main-inner h2:before{
  content: '';
  position: absolute;
  display: block;
  width: 60%;
  height: 2px;
  background: #002059;
  right: 20%;
  top: 80px;
  /* margin: 0px 50px; */
}


.section-second-main-inner p{
  display: inline-block;
  margin-top: 20px;
  text-align: center;
  /*font-size: 15px;*/

}
@media screen and (max-width: 900px) {

h2::before{
  background: rgba(255, 255, 255, .0) !important;
}
}

</style>

<style>
@media screen and (max-width: 900px) {

.bottom-image-section2, .image-section2{
  opacity: .3;
}
.section-second-main-inner h2:before, h2:before{
  background: rgba(255, 255, 255, .0);
}
}
</style>
