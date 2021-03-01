<template>
  <section class="portfolio-main-section">

    <div class="portfolio-main-section-inner">

      <div class="section-portfolio-description f-flex flex-column justify-content-center align-items-center">

        <h2 class>Посмотрите Наше Портфолио</h2>

        <span>За 10 лет у нас собралось немало работ, которые мы можем вам показать.
           Все представленные фотографии были сделаны нами.
        </span>
      </div>

      <div class = "portfolio-photos-main-section d-flex justify-content-center align-items-center">

        <div class="first-fifth">
          <nuxt-link id="portfolio-photo-side1" class="shadow" to="/clients/portfolio"></nuxt-link>
        </div>

        <div class="second-fourth">
          <nuxt-link id="portfolio-photo1" class="shadow" to="/clients/portfolio"></nuxt-link>
          <nuxt-link id="portfolio-photo2" class="shadow" to="/clients/portfolio"></nuxt-link>
        </div>

        <div class="third-main">
          <nuxt-link class="shadow" to="/clients/portfolio"></nuxt-link>
        </div>

        <div class="second-fourth">
          <nuxt-link id="portfolio-photo3" class="shadow" to="/clients/portfolio"></nuxt-link>
          <nuxt-link id="portfolio-photo4" class="shadow" to="/clients/portfolio"></nuxt-link>
        </div>

        <div class="first-fifth">
          <nuxt-link id="portfolio-photo-side2" class="shadow" to="/clients/portfolio"></nuxt-link>
        </div>
      </div>
      <nuxt-link class="button-style2 normalize" to="/clients/portfolio">Посмотреть</nuxt-link>
    </div>

  </section>
</template>

<style scoped>
.portfolio-main-section{
  min-height: 1000px;
  width: 100%;
  position: relative;
  overflow:hidden
}

.portfolio-photos-main-section a{
  margin-left: 10px;
  margin-right: 10px;
}

.second-fourth a:first-child{
  margin-bottom: 30px;
}


.section-portfolio-description span{
  display: inline-block;
  width: 80%;
  margin-bottom: 30px;
  font-size: 18px;
}

.portfolio-main-section-inner{
  margin: 150px auto;
  width: 100%;
}

.section-portfolio-description{
  width: 70%;
  margin: 50px 15%;
  text-align: center;
  z-index: 20;
  /* position: absolute; */
}

.section-portfolio-description h2{
  margin-bottom: 50px;
  font-size: 40px;
  color: #08305a;
}


.section-portfolio-description h2:before{
  content: '';
  position: absolute;
  display: block;
  width: 30%;
  height: 2px;
  background: #002059;
  right: 35%;
  top: 60px;
  /* margin: 0px 50px; */
}

.third-main a{
  display: block;
  height: 500px;
  width: 300px;
  background-image: url(/img/tech/pool-image6.jpg);
  background-position-x: 52%;
  background-position-y:center;
  background-size: cover;
}

#portfolio-photo-side1{
  display: block;
  height: 500px;
  width: 250px;
  background-image: url(/img/tech/pool-image8.jpg);
  background-position-x: 10%;
  background-position-y:center;
  background-size: cover;
}

#portfolio-photo-side2{
  display: block;
  height: 500px;
  width: 210px;
  background-image: url(/img/tech/pool-image4.jpg);
  background-position-x: 52%;
  background-position-y:center;
  background-size: cover;
}

#portfolio-photo1{
  display: block;
  height: 150px;
  width: 300px;
  background-image: url(/img/tech/pool-image2.jpg);
  background-position-x: 52%;
  background-position-y:center;
  background-size: cover;

}

#portfolio-photo2{
  display: block;
  height: 250px;
  width: 300px;
  background-image: url(/img/tech/pool-image3.jpg);
  background-position-x: 52%;
  background-position-y:center;
  background-size: cover;

}

#portfolio-photo3{
  display: block;
  height: 230px;
  width: 300px;
  background-image: url(/img/tech/pool-image5.jpg);
  background-position-x: 52%;
  background-position-y:center;
  background-size: cover;
}


#portfolio-photo4{
  display: block;
  height: 170px;
  width: 300px;
  background-image: url(/img/tech/pool-image7.jpg);
  background-position-x: 52%;
  background-position-y:center;
  background-size: cover;
}

.normalize {
  display: none;
}

@media screen and (max-width: 900px){
  .first-fifth, .second-fourth {
    display: none;
  }
  .normalize {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 50px;
}
}

</style>
