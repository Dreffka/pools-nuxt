<template>
  <footer class="back-color">

    <div class="container-fluid">
        <div class="row">
<!--           Первая колонка-->
            <div class="col-md-7">
               <nuxt-link to="/"><img class = 'footer-logo' src="@/static/logo.png" alt=""></nuxt-link>
                <div class="footer-mid">
                    <h2>Центральный офис</h2>
                    <div class="social-media">

                        <a href="https://www.instagram.com/greenoffice.pools" target="_blank"><img src="@/static/img/tech/instagram.png"  alt="instagram"></a>
                        <a href="ttps://www.facebook.com/greenoffice.pools" target="_blank"><img src="@/static/img/tech/facebook.png" alt="facebook"></a>
                        <a href="viber://add?number=380988633533"><img src="@/static/img/tech/viber.png" alt="viber"></a>
                    </div>
                    <div class="pt-3">
                      <p>Адрес офиса: г. Запорожье, ул. Верхняя, 10</p>
                      <p>Телефон: <a href="tel:0988633533"> +38 (098) 863-35-33</a> </p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>Установка бассейнов и поливов</p>
                    <p><a href="#">Политика конфиденциальности</a></p>
                </div>
            </div>
<!--           Вторая колонка-->
            <div class="col-md-5">
                <div>
                    <h3>Остались вопросы?</h3>
                    <h3>Будем рады на них ответить.</h3>
                </div>
                <div class="footer-form">
                    <Form />
                </div>
            </div>
        </div>
<!--        Черта и под чертой-->
        <div class="row footer-second">
            <hr>
            <div class="row">
                <p>© 2006-{{ new Date().getFullYear() }} ООО "Green Office"</p>
            </div>
        </div>
     </div>
  </footer>
</template>
<script>
export default {

  // head() {
  //   return {
  //     script: [
  //       {
  //         src:
  //           'http://code.jivosite.com/widget/kWaVw8nC3k'
  //       }
  //     ]
  //   }
  // }
}
</script>



<style scoped>

/*    Общие настройки*/

    footer h3, footer h3{
        font-size: 18px;
        font-weight: 300;
        text-transform: capitalize;
        line-height: 30px;
    }

     p {
        font-weight: 400;
        font-size: 17px;
    }

     a {
        color: #53bb9d;
        text-decoration: underline;
    }

/*    Сам футер в общем */

   footer.back-color{
        padding-top: 50px;
        width: 100%;
        background-color: #001c40 ;
        color: #f5f5f5;
    }


/*    Верхняя часть первой колонки*/

    .footer-logo{
        width: 300px;
        max-width: 350px;
        margin-top: 25px;
        /*margin-left: 0;*/
    }

    .footer-mid{
        margin-top: 40px;
        margin-left: 10px;
    }

    .footer-mid h2{
        display: inline-block;
        margin-bottom: 30px;
    }

    .footer-mid p, .footer-bottom p{
        display: block;
        margin-bottom: 10px;
        font-weight: 400;
    }


    /*    Нижняя часть первого столбца*/

    .footer-bottom{
        margin-top: 70px;
        font-weight: 300;
        margin-left: 10px;
    }


/*    После черты*/

    .social-media{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        /*justify-content: start;*/
        /*align-items: center;*/
        margin: 10px 0;
        max-width: 100%;
        min-width: 100%;

    }

   .social-media img{
        height: 30px;
        margin: 5px 10px;
    }


    .footer-second{
        justify-content: center;
        align-items: center;
        margin-top: 10px;
    }

    .footer-second .row{
        margin-top: 10px;
    }

    hr{
        width:100%;
        margin: 1em auto;
        border:none;
        height:1px;
        background:#ccc;
    }


</style>
