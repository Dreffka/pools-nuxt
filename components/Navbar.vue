<template>

  <nav class="navbar navbar-dark bg-black" aria-label="First navbar example">
    <div class="container-fluid">
      <nuxt-link class="navbar-brand" to="/"><img src="@/static/logo.png" class="logo" alt=""></nuxt-link>

      <a href="tel:0988633533" class="tel-header">+38 (098) 863-35-33</a>

      <div class="header-right" >
        <li v-for="link in links">
          <nuxt-link :to="link.href">{{link.title}}</nuxt-link>
        </li>

      </div>


    </div>
  </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
    return{
       pages: [
         {
           title: 'О нас',
           href: '/about'
         },
         {
          title: 'Бассейны',
          href: '/pools'
         },
         {
          title: 'Контакты',
          href: '/contacts'
         }
       ],

       links: [
         {
           title: 'О нас',
           href: '/about'
         },
         {
          title: 'Бассейны',
          href: '/pools'
         },
         {
          title: 'Контакты',
          href: '/contacts'
         }
       ]
    }
  }
}
</script>

<style scoped>
  .logo{
    width: 260px;
  }

  .header-right{
    display: flex;
    align-items: center;

  }

  .header-right > li > a , .tel-header{
    color: #fff;
    font-size: 20px;
    text-decoration: none;
  }
  .bg-black{
    background-color: #000101;
  }

</style>
