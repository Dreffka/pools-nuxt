<template>
  <div>
    <!-- <form method="post" class="mt-3">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="formName"></label>
            <input type="text" class="form-control"  placeholder="Ваше имя" id="formName" v-model="name" required>
          </div>
          <div class="form-group col-md-6">
            <label for="formTel"></label>
            <input type="tel" class="form-control"  placeholder="Номер телефона" id="formTel" v-model="telephone_number" required>
          </div>
        </div>
        <div class="form-group">
          <label for="formMsg"></label>
          <textarea class="form-control textAreaBig"  placeholder="Ваше сообщение" id="formMsg" v-model="answer" ></textarea>
        </div>

        <div class = "submitBtn form-group">
          <button type="submit" class="btn btn-lightgreen" @click.prevent="createClient()" >Отправить</button>
        </div>
      </form> -->


        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="formName"></label>
            <input type="text" class="form-control"  placeholder="Ваше имя" id="formName" v-model="name" required>
          </div>
          <div class="form-group col-md-6">
            <label for="formTel"></label>
            <input type="tel" class="form-control"  placeholder="Номер телефона" id="formTel" v-model="telephone_number" required>
          </div>
        </div>
        <div class="form-group">
          <label for="formMsg"></label>
          <textarea class="form-control textAreaBig"  placeholder="Ваше сообщение" id="formMsg" v-model="answer" ></textarea>
        </div>

        <div class = "submitBtn form-group">
          <button type="submit" class="btn btn-lightgreen" @click.prevent="createClient()" >Отправить</button>
        </div>



  </div>
</template>

<script>
import axios from '@nuxtjs/axios'
export default {
  data() {
    return {
      name: '',
      telephone_number: '',
      answer: ''
    }
  },
  methods: {

    createClient(name, telephone_number, answer) {

      axios.post('https://admin.greenoffice.in.ua/api/clients', {
            name,
            telephone_number,
            answer
        })
    }
  }
}
</script>

<style scoped>
.submitBtn {
  margin-top: 30px;
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
  height: 180px;
}
</style>

