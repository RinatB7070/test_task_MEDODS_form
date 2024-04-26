<template>
    <div class="address">
      <h2 class="address-header span-2">Адрес</h2>

      <div class="input-text_box">
        <label for="cntry">Страна</label>
        <input
          type="text"
          placeholder="Введите текст..."
          class="input-text"
          id="cntry"
          v-model="address.country"
          >
      </div>

      <div class="input-text_box">
        <label for="area">Область</label>
        <input
          type="text"
          placeholder="Введите текст..."
          class="input-text"
          id="area"
          v-model="address.area"
          >
      </div>

      <div class="input-text_box">
        <label for="city" class="important">Город</label>
        <input
          type="text"
          placeholder="Введите текст..."
          class="input-text"
          :class="onErrorCity"
          id="city"
          v-model="address.city"
          >
      </div>
      
      <div class="input-text_box">
        <label for="srt">Улица</label>
        <input
          type="text"
          placeholder="Введите текст..."
          class="input-text"
          id="srt"
          v-model="address.street"
          >
      </div>

      <div class="input-text_box">
        <label for="hus">Дом</label>
        <input
          type="text"
          placeholder="Введите текст..."
          class="input-text"
          id="hus"
          v-model="address.house">
      </div>

      <div class="input-text_box">
        <label for="idx">Индекс</label>
        <input
          type="text"
          placeholder="Введите номер..."
          class="input-text"
          id="idx"
          v-model="address.index"
          >
      </div>
    </div>
</template>

<script>
export default {
  props: ['address', 'addressErrors'],
  computed: {
    onErrorCity () {
      if (this.addressErrors && this.addressErrors.city.$error) {
        return 'input_error'
      } else {
        return ''
      }
    }
  }
}
</script>
