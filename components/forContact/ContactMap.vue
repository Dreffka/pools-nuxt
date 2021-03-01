<template>
      <section class="map mt-5 mb-5">
          <!-- <h2>Как нас найти?</h2> -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1272.28043062668!2d35.100621783417566!3d47.85422074791763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc66d227455555%3A0xed1c1aeb0b2b76f5!2z0JPQu9Cw0LLQvdCw0Y8g4oCiIEdyZWVuIE9mZmljZQ!5e0!3m2!1sru!2sua!4v1611671377477!5m2!1sru!2sua" width="100%" height="600" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </section>
</template>

<style scoped>

  iframe {
    border-radius: 5px;
    box-shadow: 0 5px 5px rgba(22, 22, 22, 0.3);
    height: 450px;
  }

  .map h2{
      text-align: center;
      font-size: 2.5em;
      color: #002059;
      text-transform: capitalize;
      position: relative;
  }

  .map h2:before{
    content: '';
    position: absolute;
    display: block;
    width: 20%;
    height: 2px;
    background: #002059;
    right: 40%;
    top: 90px;
     /* margin: 0px 50px; */
    }

</style>
