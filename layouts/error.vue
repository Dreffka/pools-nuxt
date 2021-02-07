<template>
  <div>
      <div class="container-fluid errorPage">
        <h2 class="pt-3 pb-3">Что-пошло не так</h2>
        <p class=" pb-3">Данной страницы нет, проверьте правильность ввода</p>
        <nuxt-link to="/" class="pt-3 pb-3 btn-small btn-lightgreen">На главную</nuxt-link>
      </div>
  </div>
</template>
<style>
.errorPage{
  height: 50vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
