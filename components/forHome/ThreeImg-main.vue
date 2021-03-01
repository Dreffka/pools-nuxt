<template>
  <section class="block-description-images">
    <div class="block-description-images-inner">
      <div class="top-block-description d-flex align-items-start">
        <h2>Почему вам нужны наши услуги?</h2>
        <p>

          Green-office предлагает вашему вниманию стекловолоконные и бетонные бассейны, а, также, автоматические системы полива.
          Наши услуги облегчают жизнь, создают красоту и уют и дарят хорошее настроение на долгие годы!


        </p>
      </div>

      <div class="block-description-images-main-block d-flex align-items-stretch">
        <div class="block-description-column d-flex align-items-center">
          <p>
            Бассейн - это прежде всего крепкое здоровье и хорошее настроение для вас и вашей семьи.
            Если у вас есть дети, то не сомневайтесь, что наша качественная работа послужит причиной ежедневной улыбки вашего ребенка!
            У нас есть модели, которые идеально подходят как раз для детей.

          </p>
        </div>

        <div class="block-description-column d-flex align-items-center">
          <p>Наша компания предоставляет широкий выбор бассейнов на любой вкус и цвет, от огромных сборных бассейнов
            в основном для коммерческого пользования до маленьких моделей "Баден" или "Купель".
            Бассейны могут быть выполнены в разных вариациях по желанию клиента и, конечно, будет дана гарантия.
          </p>
        </div>


        <div class="block-description-column d-flex align-items-center">
          <p>
            Фирма Green-Office работает также над созданием систем поливов разных сложностей и размеров. Мы сотрудничаем
            только с проверенными америнскими брендами такими как Rainbird и Hunter. Но в вашем саду мы можем не только упростить вам работу,
            но и создать уникальную романтичную атмосферу при помощи красивых прудов.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>



<style scoped>
.block-description-images{
  width: 100%;
  max-width: 100%;
}

.block-description-images>div{
  margin: 150px 100px;
}

.top-block-description *{
  display: block;
  flex-basis: 50%;
}

.top-block-description h2{
  font-size: 50px;
}

.top-block-description p{
  font-size: 18px;
  margin-top: 20px;
}

.block-description-images-main-block div:nth-child(2){
  margin: 50px;
}

.block-description-images-main-block div{
  margin-top: 50px;

}

.block-description-column{
  background:rgba(0,0,0, 0.05);
  padding: 30px;
  height: 500px;
  background-blend-mode: color;
  border-radius: 10px;
  flex-basis: 33%;
}

.block-description-column p{
  background: rgba(253,253,253, 0.6);
  padding: 20px;
  /*font-size: 17px;*/
  text-align: justify;
}

.block-description-column:first-child{
  background-image: url(/img/tech/boy-jumps-in-pool.jpg);
  background-size: cover;
  background-position-x: 40%;
}

.block-description-column:nth-child(2){
  background-image: url(/img/tech/pool-image-block.jpg);
  background-size: cover;
  background-position-x: 40%;
}

.block-description-column:nth-child(3){
  background-image: url(/img/tech/watering.jpg);
  background-size: cover;
  background-position-x: 40%;
}

</style>
