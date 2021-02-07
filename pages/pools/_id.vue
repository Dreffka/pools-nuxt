<template>

  <div class="container-fluid">
    <h4> Бассейн: {{ $route.params.id }} </h4>



    <div class="pool-card-center">
      <div class="pool-img-center">
        <img :src="pool.image" class="pool-img" alt="">
      </div>
      <p class="card-pool-title">{{ pool.title }}</p>
      <p class="card-pool-text">{{ pool.text }}</p>
    </div>
  </div>


</template>

<script>
  export default {
    props: ['pool']
  }
</script>
