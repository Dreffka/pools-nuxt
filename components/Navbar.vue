<template>

  <header>
    <div class="header-top d-flex justify-content-around align-items-center">
      <div class="col-md-6">
        <p>Позвоните нам по телефону
          <a href="tel:0988633533">+38 (098) 863-35-33</a>
          или
          <a href="#" @click="$bvModal.show('bv-modal-header')">
            Заполните форму
          </a>
        </p>
      </div>
    </div>

    <b-modal id="bv-modal-header" class="text-center" hide-footer>
      <template #modal-title>
        Связаться с нами
      </template>
      <div class="d-block text-center">
        <Form/>
      </div>
    </b-modal>

    <b-navbar class="container-fluid shadow-sm bg-white fixed-top" toggleable="lg" type="black" variant="info" >
<!--      <b-navbar-brand href="#">-->
<!--        <nuxt-link to="/"><img src="@/static/logo.png" class="logo" alt=""></nuxt-link>-->
<!--      </b-navbar-brand>-->
      <div class="navbar-brand">
        <nuxt-link to="/"><img src="@/static/logo.png" class="logo" alt=""></nuxt-link>
      </div>

      <b-navbar-toggle class="header-menu" target="nav-collapse">
        ☰
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown class = "menu-items text-black" text="Бассейны"  right>
            <b-dropdown-item to="/pools/standart">Стандарт</b-dropdown-item>
            <b-dropdown-item to="/pools/premium">Премиум</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/watering">Поливы</b-nav-item>
          <b-nav-item to="/ponds">Пруды</b-nav-item>
          <b-nav-item to="/about">О нас</b-nav-item>
          <b-nav-item to="/contacts">Контакты</b-nav-item>

          <b-nav-item-dropdown class = "menu-items text-black" text="Клиентам"  right>
            <b-dropdown-item to="/clients/portfolio">Портфолио</b-dropdown-item>
            <b-dropdown-item to="/clients/about-composition-pool">Про бассейны</b-dropdown-item>
            <b-dropdown-item to="/clients/installation">Установка бассейнов</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown class = "menu-items" text="Оборудование" right>
            <b-dropdown-item to="/">На бассейны (гугл док)</b-dropdown-item>
            <b-dropdown-item to="/">На пруды (гугл док)</b-dropdown-item>
            <!-- <b-dropdown-item><nuxt-link to="/equipment/coverings">Накрытия для бассейнов</nuxt-link></b-dropdown-item> -->
            <!-- <b-dropdown-item><nuxt-link to="/">Аксессуары (гугл док)</nuxt-link></b-dropdown-item> -->
<!--            <b-dropdown-item><nuxt-link to="/equipment/service">Обслуживание</nuxt-link></b-dropdown-item>-->
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown class="menu-items" text="Язык" right>
            <b-dropdown-item href="#">РУС</b-dropdown-item>
            <b-dropdown-item href="#">УКР</b-dropdown-item>

          </b-nav-item-dropdown>
        </b-navbar-nav>
         -->
      </b-collapse>
    </b-navbar>

  </header>

</template>




<script>
import Modal from '@/components/Modal'


export default {

  components: {
    Modal
  }
}
</script>

<style >


.navbar-toggler {
  background-color: rgba(5, 5, 5, 0.15);
}

header {
  background-color: rgba(21, 4, 4, 0.85);
  z-index: 10;
  position: relative;
}

.header-top{
  /*height: 30px;*/
  background: #072e58;
  font-size: 12px;
  justify-content: center;
  align-items: center;
}

.header-top p{
  color:white;
  text-align: center;
  text-transform: lowercase;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1.5px;
  word-spacing: 2px;
  margin-bottom: 0;
  padding: 5px 0;
}

.header-top a{
  color:#3ca8f7;
  text-decoration: underline;
}

.header-fixed-part{
  /* margin-top: 30px; */
  height: 70px;
  top:0;
}

.dropdown-item a{
  color: black;
}
.navbar-collapse {
  justify-content: flex-end;
}

.nav-link, .menu-items span{
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  color: black !important;
}

.nav-link:hover, .menu-items:hover{
  text-decoration: underline;
}

.fixed-top{
  position: sticky;
}

.logo{
  /*margin-left: 5em;*/
  width: 250px;
}

.navbar-nav{
  padding-left: 10%;
}

.header-list{
  margin: 0;
}

.header-list li{
  list-style-type:none;
  margin: 10px;
}

.header-list li > a {
  color: #000;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
}

.navbar {
  background-color: #fff;
}
</style>
