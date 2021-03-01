<template>
  <div>
<!--    <b-button class="show-btn" @click="$bvModal.show('bv-modal-example')">Open Modal</b-button>-->

    <button href="#" class="show-btn btn-small btn-lightgreen" @click="$bvModal.show('bv-modal')">Заказать просчет</button>

    <b-modal id="bv-modal" class="text-center" hide-footer>
      <template #modal-title>
        Связаться с нами
      </template>
      <div class="d-block text-center">
       <Form/>
      </div>

    </b-modal>
  </div>
</template>

<script>
export default {
name: "Modal"
}
</script>

<style scoped>

</style>
