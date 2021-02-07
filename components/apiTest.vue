<template>
  <div>
    <ul>
      <li v-for="pool in pools">
        <a href="#" >{{ pool }}</a>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'apiTest',
  data(){
    return{
      pools: []
    }
  },
  async mounted() {
     this.pools = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
    //this.pools = await this.$axios.$get('https://greenoffice.in.ua/green-office3/public/shef-admin/pools')

  }
}
</script>
