<template>
  <header class="container-fluid">
    <nav class="navbar align-items-center row" aria-label="Green-office">

      <ul class="first-header-list header-list row align-items-center">
        <li><nuxt-link to="/about">О нас</nuxt-link></li>
        <li><nuxt-link to="/clients">Клиентам</nuxt-link></li>
        <li><nuxt-link to="/contacts">Контакты</nuxt-link></li>
      </ul>

      <div class=" row justify-content-center align-items-center logo-container">
        <nuxt-link to="/"><img src="@/static/logo.png" class="logo" alt=""></nuxt-link>
      </div>
<!--      <a href="tel:0988633533" class="tel-header">+38 (098) 863-35-33</a>-->

      <!--        <menu class="header-right">-->
      <ul class="second-header-list header-list justify-content-center align-items-center d-flex">
        <li><nuxt-link to="/pools">Бассейны</nuxt-link></li>
        <li><nuxt-link to="/equipment">Оборудование</nuxt-link></li>
      </ul>
      <!--        </menu>-->
      <!--    </div>-->
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavbarTwo'
}
</script>

<style scoped>



header {
  background-color: rgba(255, 255, 255, 0.85);
  z-index: 50;
}

.first-header-list{
}

.logo-container{
}

.second-header-list{
}

.logo{
  width: 320px;
}

.header-list{
  margin: 0;
}

.header-list li{
  list-style-type:none;
  margin: 10px;
}

.header-list li > a {
  font-family: 'Open Sans';
  color: #000;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
}




/*
    .container-fluid {
    padding-left: 8%;
    padding-right: 8%;
}
*/
</style>



