<template>
  <footer class="back-color">
    <div class="container-fluid">
        <div class="row">
<!--           Первая колонка-->
            <div class="col-md-7">
               <a href=""><img class = 'footer-logo' src="@/static/logo.png" alt=""></a>
                <div class="footer-mid">
                    <h2>Центральный офис</h2>
                    <p><strong>Адрес:</strong> г. Запорожье, ул.Такая-то 8/88</p>
                    <p><strong>Телефон: </strong><a href="tel:0988633533"> +38 (098) 863-35-33</a></p>
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
                <p>© 2016-{{ new Date().getFullYear() }} ООО "Green Office"</p>
              </div>
          <div class="social-media">
            <a href="https://instagram.com/greenoffice38" target="_blank"><img src="@/static/img/tech/instagram.png"  alt="instagram"></a>
            <a href=""><img src="@/static/img/tech/facebook.png" alt="facebook"></a>
            <a href=""><img src="@/static/img/tech/viber.png" alt="viber"></a>
          </div>
        </div>
     </div>
  </footer>
</template>


<script>
import Form from './Form.vue'

export default {
    name: 'Footer',
    components: {
        Form
    }
}
</script>




<style scoped>

/*    Общие настройки*/

     h2, footer h3{
        font-size: 18pt;
        font-family: Open Sans;
        font-weight: 400;
        text-transform: uppercase;
        line-height: 30px;
    }

     p {
        font-family: Open Sans;
        font-weight: 400;
    }

     a {
        color: #2c7bc2;
        text-decoration: underline;
    }

/*    Сам футер в общем */

   footer.back-color{
        padding: 50px 0;
        width: 100%;
        background-color: #000101 ;
        color: whitesmoke;
    }


/*    Верхняя часть первой колонки*/

    .footer-logo{
        width: 250px;
        max-width: 350px;
        margin-top: 25px;
        /*margin-left: 0;*/
    }

    .footer-mid{
        margin-top: 40px;
        /*margin-left: 0;*/
    }

    .footer-mid h2{
        display: inline-block;
        margin-bottom: 30px;
    }

    .footer-mid p, .footer-bottom p{
        display: block;
        margin-bottom: 10px;
    }


    /*    Нижняя часть первого столбца*/

    .footer-bottom{
        margin-top: 70px;
        font-weight: 500;
        /*margin-left: 0;*/
    }


/*    После черты*/

    .footer-second .social-media{
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
        max-width: 100%;
        min-width: 100%;

    }

    .footer-second .social-media img{
        height: 30px;
        margin: 5px 10px;
    }

        .footer-second{
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }

    .footer-second .row{
        margin-top: 20px;
    }

    hr{
        width:100%;
        margin: 1em auto;
        border:none;
        height:1px;
        background:#ccc;
    }


</style>
