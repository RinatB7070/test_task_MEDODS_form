<template>
  <div class="passport">
    <h2 class="span-2">Паспортные данные</h2>

    <div class="input-text_box" >
      <label for="doc_type" class="important">Тип документа</label>
      <select id="doc_type" class="input-select" :class="onErrorDocType" v-model="passport.docType">
        <option value="pas">Паспорт</option>
        <option value="msk">Свидетельство о рождении</option>
        <option value="drl">Вод. удостоверение</option>
      </select>
    </div>

    <div></div>

    <div class="input-text_box">
      <label for="series">Серия</label>
      <input type="text" placeholder="Введите текст..." class="input-text" id="series" v-model="passport.series">
    </div>

    <div class="input-text_box">
      <label for="passport_number">Номер</label>
      <input type="text" placeholder="Введите текст..." class="input-text" id="passport_number" v-model="passport.passNumber">
    </div>

    <div class="input-text_box">
      <label for="release_by">Кем выдан</label>
      <input type="text" placeholder="Введите текст..." class="input-text" id="issued_by" v-model="passport.releaseBy">
    </div>

    <div class="input-text_box">
      <label for="release_date" class="important">Дата выдачи</label>
      <input type="text" placeholder="Введите текст..." class="input-text" :class="onErrorReleaseDate" id="release_date" v-model="passport.releaseDate">
    </div>
  </div>
</template>

<script>
export default {
  props: ['passport', 'passportErrors'],
  computed: {
    onErrorDocType () {
      if (this.passportErrors && this.passportErrors.docType.$error) {
        return 'input_error'
      } else {
        return ''
      }
    },
    onErrorReleaseDate () {
      if (this.passportErrors && this.passportErrors.releaseDate.$error) {
        return 'input_error'
      } else {
        return ''
      }
    }
  }
}
</script>