<template>
<div class="blue">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                <h2>Контакты</h2>
                <div class="footer-mid">
                    <h5>Центральный офис</h5>
                    <p><strong>Адрес:</strong> г. Запорожье, ул.Такая-то 8/88</p>
                    <p><strong>Телефон:</strong><a href="tel:0988633533"> +38 (098) 863-35-33</a></p>
                    <p><strong>Мы в </strong><a href="https://instagram.com/greenoffice38" target="_blank"> Instagram</a></p>
                </div>
                <div class="footer-bottom">
                    <p><strong>© 2016-{{ new Date().getFullYear() }} ООО "Грин Офис"</strong></p>
                    <p>Установка бассейнов и поливов</p>
                    <p><a href="#">Политика конфиденциальности</a></p>

                </div>
            </div>
            <div class="col-md-6">
                <div>
                    <h4>Остались вопросы?</h4>
                    <h4>Будем рады на них ответить.</h4>
                </div>
                <div>
                    <Form />
                </div>
                 
            </div>
        </div>
     </div>
</div>
    
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
    .blue{
        padding: 50px 0px;
        width: 100%;
        background-color: #000101 ;
        color: whitesmoke;
    }

    .footer-mid{
        margin-top: 70px;
    }
    
    .footer-mid>h5 {
        margin-bottom: 20px;
        font-weight: 600;
    }
    
    .footer-bottom{
        margin-top: 70px;
        font-weight: 500;
    }
</style>