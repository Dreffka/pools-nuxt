<template>
  <div>
      <form method.prevent="POST">
        <div class="form-row">
          <div class="form-group col-md-6">
          <label>Одноко</label>
          <input type="text" class="form-control" placeholder="Ваше имя" required>
        </div>
        <div class="form-group col-md-6">
          <label>Двоко</label>
          <input type="tel" class="form-control" placeholder="Номер телефона" required>
        </div>
      </div>
      <div class="form-group">
        <label>Троко</label>
        <textarea class="form-control textAreaBig" placeholder="Ваше сообщение"></textarea>
      </div>

      <div class = "submitBtn form-group">
        <button type="submit" class="btn btn-lightgreen">Отправить</button>
      </div>

  </form>
    </div>

  <!-- <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        *Соглашаюсь на обработку данных
      </label>
    </div>
  </div> -->

</template>

<script>
  export default {
    name: 'Form',
  }
</script>

<style scoped>
.submitBtn {
  margin-top: 20px;
}
.form-row {
  display: flex;
}
.form-control {
  height: 75px;
}

.form-group {
  padding-right: 10px;
}
.textAreaBig{
  height: 180px
}


</style>

