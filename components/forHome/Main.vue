<template>
  <section class="main-screen-container">
    <div class="main-screen d-flex align-items-center justify-content-center">
      <div class="container-fluid inner-block-main">

        <h1>Воплоти В ЖИЗНЬ бассейн МЕЧТЫ!</h1>
        <h2>соответствуют европейским стандартам и вашим желаниям</h2>

        <div class="button-group row">
          <div class="col-md-4 first-button">
            <nuxt-link class="button-style2" to="/pools/standart">Перейти в бассейны</nuxt-link>
          </div>
           <div class="col-md-4 second-button">
            <nuxt-link class="button-style2" to="/about">Акции</nuxt-link>
          </div>
          <div class="col-md-4 second-button">
            <nuxt-link class="button-style2" to="/about">Узнать больше о нас</nuxt-link>
          </div>


        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.main-screen {
  /*background-image: url(/img/tech/boy-jumps-in-pool.jpg);*/
  background-image: url(/img/bh-header.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height:80vh;
  position: relative;
  margin: 0;
  background-color: rgba(7,47,89, 0.15);
  background-blend-mode: color;
}

/*.first-button {*/
/*  justify-content: flex-end;*/
/*}*/

.inner-block-main{
  padding-bottom: 50px;
  text-align: center;
  color: #dae5ee;
}

.inner-block-main h1{
  font-size: 45px;
  font-weight: 500;
  letter-spacing: 1.6px;
  /* text-shadow: 0.5px 0.5px 0.5px #072f59; */
  text-transform: uppercase;
  background: rgba(7,47,89, 0.1);
  margin-bottom: 0;
  width: 100%;
}

.inner-block-main h2{
  display: inline-block;
  font-size: 22px;
  font-weight: 400;
  padding: 20px;
  text-transform:capitalize;
  /* text-shadow: 0.5px 0.5px 0.5px #072f59; */
  width: 100%;
}

.button-group{
  padding-top: 50px;
}

.heading-right > h1 {
  display: inline-block;
  text-transform: uppercase;
  padding-bottom: 50px;
}

.left-panel h1{
  display: inline-block;
  position: relative;
}

.right-panel h2{
  color: white;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  letter-spacing: 10px;
  font-size: 14px;
  font-weight: 300;
}

.group-text > h5 {
  text-transform: uppercase;
}

.btn-small {
  background-color: rgba(255, 255, 255, 0.6);
  color: rgb(63, 8, 8);
}


@media screen and (max-width: 900px) {
  .button-style2{
    display: flex;
    border: 3px solid;
    margin: 5px 0;
    padding: 5px 30px;
  }

  .inner-block-main h1{
  display: inline-block;
  text-transform: uppercase;
  padding-bottom: 30px;
  font-size: 34px;
  font-weight: 600;

}
}

</style>
