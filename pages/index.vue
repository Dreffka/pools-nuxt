<template>
  <article>
    <Main/>
    <Videoblock/>
    <SecondMainBlock/>
    <SecondMain/>
    <!-- <ThirdMain/> -->
    <!-- <ThreeImgMain/> -->
    <Portfolio/>
  </article>
</template>

<script>
export default {
   head() {
    return {
      title: 'Главная | Грин Офис бассейны поливы пруды Запорожье'
    }
  },
}
</script>
<style scoped>

.proposals-section h2{
  display: inline-block;
  font-family: serif;
  font-size: 30px;
  color:#0c2558;
  font-weight: 800;
  margin: 10px auto;
  text-align: center;
}
.proposals-section img{
  border-radius: 20px;
}
.proposals-section p{
  color:#0c2558;
}
.about-us-proposal img{
  width: 400px;
}
.social-block img{
  width: 25px;
}
.social-block a{
  background: white;
  padding: 10px;
  border: solid 1px #0d2558;
  border-bottom-width: 0;
  margin: 0 0;
}

.social-block a:last-child{
  border-bottom-width: 1px;
}
</style>
