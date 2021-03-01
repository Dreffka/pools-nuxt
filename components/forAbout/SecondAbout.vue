<template>
  <section class="section-third-main d-flex justify-content-center align-items-center">
    <div class="background-shadow-block"></div>
    <div class = "section-third-main-inner d-flex flex-column justify-content-center align-items-center">
      <h1>О нас</h1>
      <p class = "block-description">
       Мы компания с многолетним опытом, специализирующаяся на строительстве бассейнов, установке автоматических систем полива,
       создании плавательных прудов, декоративных водоёмов и водопадов.
      Мы занимаемся не только продажей готовых композитных чаш, оборудования для бассейнов, прудов,
      систем автополива и кабельно-проводниковой продукции, но также производим весь спектр работ «под ключ», в том числе:
      монтаж стекловолоконных чаш, создание бетонных бассейнов, обслуживание и обновление установленных бассейнов, замена
      комплектующих, установка павильона или накрытия для бассейна и многое другое.
      </p>
      <!-- <p class="block-description">
            Предлагаем Вам большой выбор бассейнов на любой вкус и цвет для индивидуального и общественного пользования!
            Наши бассейны одинаково хорошо подойдут, как взрослым, так и самым маленьким детям. Мы знаем, как сделать бассейн
            для Вас удобным и красивым, а так же не дорогим в эксплуатации.
      </p> -->


<!-- Блок с тремя картинками -->
        <div class="cards-container row">
        <div class="col-md-4 spacers">
          <div class="card-container shadow" >
              <div class="top-card-section3">
            <img src="@/static/img/tech/pool.png" alt="Басейн">
          </div>
          <h3 class="card-title">Работы и услуги</h3>
          <p class="card-description">
           Предлагаем Вам большой выбор бассейнов на любой вкус и цвет для индивидуального и общественного пользования!
           Наши бассейны одинаково хорошо подойдут, как взрослым, так и самым маленьким детям. Мы знаем, как сделать
           бассейн для Вас удобным и красивым, а так же не дорогим в эксплуатации. Дизайны наших бассейнов могут быть
           совсем разные: от минималистичных до суперсовременных. Для любителей природных водоёмов мы можем создать
           прекрасный экопруд, с цветами, с кристально чистой, как в горных озёрах, водой, манящей поплавать в ней в
           своё удовольствие. Также специалисты нашей компании могут позаботится о красоте газона, общественного парка,
           цветущего сада или спортивного поля. Установка любого вида накрытия для бассейна. Ну и конечно же предоставляем
           услуги обслуживания бассейнов, прудов и автополивов.
          </p>
        </div>
          </div>

        <div class="col-md-4 spacers">
          <div class="card-container shadow" >
            <div class = "top-card-section3">
            <img src="@/static/img/tech/grade.png" alt="Робота">
          </div>
          <h3 class="card-title">Выполняем свою работу качественно</h3>
          <p class="card-description">
            При создании или установке бассейнов мы используем в своём арсенале наиболее актуальные технологии, оборудование
            высокого качества и современные материалы. За 15 лет продуктивной деятельности, нами успешно реализовано сотни
            комплексных проектов разной сложности, а положительные отзывы тысяч довольных результатом клиентов – наилучшее тому
            подтверждение. Мы очень гордимся этим результатом и надеемся, что вы станете еще одним человеком, который сможет
            сам удостовериться в нашем профессионализме.

          </p>
        </div>
          </div>

        <div class="col-md-4 spacers">
          <div class="card-container shadow" >
               <div class = "top-card-section3">
            <img src="@/static/img/tech/expi.png" alt="Швидкість">
          </div>
          <h3 class="card-title">Мы постоянно совершенствуемся</h3>
          <p class="card-description">
           Еще одна причина, почему наша компания выгодно выделяется на фоне других - это скорость работы. Мы можем работать
           и быстро, и качественно, и здесь нет никакого подвоха. За годы опыта наши работники научились делать свое дело
           действительно профессионально.
          </p>
        </div>
          </div>
      </div>
<!-- Конец блока с тремя картинками -->


    </div>
  </section>
</template>



<style scoped>

.card-container{
  background: white;
  padding: 40px;
  border-radius: 10px;
}

.shadow:hover{
  box-shadow: 0 0 5px  rgba(22, 22, 22, 0.1) !important;
  transition: 0.5s;
}

.card-container p{
  font-size: 15px;
}


.card-container h3{
  margin: 30px auto;
}


.cards-container{
  margin: 50px auto;
}

.section-third-main{
  width: 100%;
  min-height: 100px;
  position: relative;
  overflow: hidden;
}


.background-shadow-block{
  position: absolute;
  width: 80%;
  height: 300px;
  background: #cde0ea;
  bottom: 110px;
  right: 0;
  z-index: 0;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}


.section-third-main-inner{
  margin: 150px auto;
  max-width: 95%;
  z-index: 1;
}

.section-third-main h2{
  margin: 0 auto;
  text-align: center;
}

.section-third-main .block-description{
  max-width: 700px;
  text-align: center;
  margin-top: 20px;
}

.top-card-section3{
  display: block;
  text-align: center;
}

.top-card-section3 img{
  height: 50px;
}

.card-description, .card-title{
  text-align: center;
}

.spacers{
  margin-top: 30px;
}

</style>
