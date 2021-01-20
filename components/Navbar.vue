<template>

  <nav class="navbar navbar-dark bg-black" aria-label="First navbar example">
    <div class="container-fluid">
      <nuxt-link class="navbar-brand" to="/"><img src="@/static/logo.png" class="logo" alt=""></nuxt-link>

      <a href="tel:0988633533" class="tel-header">+38 (098) 863-35-33</a>

        <div class="header-right" >
          <ul>
            <li v-for="link in links">
              <nuxt-link :to="link.href">{{link.title}}</nuxt-link>
            </li>
          </ul>

        </div>

      <ul>
        <li class="nav-item dropdown ">
          <a class="nav-link dropdown-toggle"
             data-bs-toggle="dropdown"
             href="#" role="button"
             aria-expanded="false">
            <span class="navbar-toggler-icon"></span>
          </a>
          <ul class="dropdown-menu">
            <li class="nav-item active" v-for="page in pages">
              <nuxt-link class="dropdown-item" :to="page.href">{{ page.title }}</nuxt-link>
            </li>
          </ul>
        </li>
      </ul>

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
    position: absolute;
    right: 15%;
  }

  .header-right > ul > li > a , .tel-header{
    color: #fff;
    font-size: 20px;
    text-decoration: none;
  }
  .bg-black{
    background-color: #000101;
  }

  .dropdown-toggle{
    display: contents;
    border: 1px solid grey;
  }
  .navbar-toggler-icon {
    width: 40px;
    color: #fff;
  }

  .dropdown-toggle::after{
    display: none;
  }
</style>
