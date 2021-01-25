<template>

  <nav class="navbar navbar-dark bg-black" aria-label="Green-office">
    <div class="container-fluid">
      <nuxt-link class="navbar-brand" to="/"><img src="@/static/logo.png" class="logo" alt=""></nuxt-link>
      <a href="tel:0988633533" class="tel-header">+38 (098) 863-35-33</a>
        <menu class="header-right">
          <li v-for="link in links">
            <nuxt-link :to="link.href">{{link.title}}</nuxt-link>
          </li>
        </menu>
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
          title: 'Бассейны',
          href: '/pools'
         },


           {
           title: 'Клиентам',
           href: '/clients'
         },

           {
           title: 'Оборудование',
           href: '/clients'
         },

           {
           title: 'О нас',
           href: '/about'
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
           title: 'Клиентам',
           href: '/clients'
         },

           {
           title: 'Оборудование',
           href: '/equipment'
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
    width: 300px;
  }

  .header-right{
    display: flex;
    align-items: center;

  }
    .header-right > li{
        list-style-type:none;
        margin: 10px;
    }

  .header-right > li > a , .tel-header{
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 300;
  }
  .bg-black{
    background-color: #000101;
  }
    .tel-header{
        position: relative;
    }

    .tel-header:before{
        content: '';
        background-image: url(/img/tech/telephone-icon.png);
      background-size: contain;
        position: absolute;
        top: 0;
        left: -20px;
        width: 20px;
        height: 20px;
    }

    .container-fluid {
    padding-left: 8%;
    padding-right: 8%;
}
</style>
