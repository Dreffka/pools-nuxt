<template>
  <b-navbar toggleable type="dark" variant="dark">
    <nuxt-link to="/"><img src="@/static/logo.png" class="logo" alt=""></nuxt-link>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <li><nuxt-link to="/">Главная</nuxt-link></li>
        <li><nuxt-link to="/pools">Бассейны</nuxt-link></li>
        <li><nuxt-link to="/equipment">Оборудование</nuxt-link></li>
        <li><nuxt-link to="/about">О нас</nuxt-link></li>
        <li><nuxt-link to="/clients">Клиентам</nuxt-link></li>
        <li><nuxt-link to="/contacts">Контакты</nuxt-link></li>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavbarMobile'
}
</script>

<style scoped>


</style>



