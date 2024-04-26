<template>
  <div class="attributes-box">
    <h2 class="span-2">Данные</h2>

    <div class="input-text_box">
      <label for="lastname" class="important">Фамилия</label>
      <input
        type="text"
        placeholder="Введите текст..."
        class="input-text"
        :class="onErrorLastName"
        id="lastname"
        v-model="attributes.lastname"
        >
    </div>

    <div class="input-text_box">
      <label for="name" class="important">Имя</label>
      <input
        type="text"
        placeholder="Введите текст..."
        class="input-text"
        :class="onErrorFirstName"
        id="name"
        v-model="attributes.firstname"
        >
    </div>

    <div class="input-text_box">
      <label for="patronymic">Отчество</label>
      <input
        type="text"
        placeholder="Введите текст..."
        class="input-text"
        id="patronymic"
        v-model="attributes.patronymic"
      >   
    </div>

    <div class="input-text_box">
      <label for="birth_date" class="important">Дата рождения</label>
      <input
        type="date"
        placeholder="Введите дату..."
        class="input-text input-date"
        :class="onErrorBirthDate"
        id="birth_date"
        min="1900-01-01"
        max="2025-01-01"
        v-model="attributes.birthDate"
      >
    </div>


    <div class="input-text_box">
      <label for="phone_number" class="important">Номер телефона</label>
      <input
        type="text"
        placeholder="Введите номер..."
        class="input-text"
        :class="onErrorPhoneNum"
        id="phone_number"
        v-model="attributes.phoneNum"
      >
    </div>


    <div class="input-text_box">
      <label for="gender">Пол</label>
      <select id="gender" class="input-select" v-model="attributes.gender">
        <option value="man">Мужчина</option>
        <option value="wmn">Женщина</option>
      </select>
    </div>

    <div class="radio_box" :class="onErrorClientGroup">
      <span class="label important">Группа клиентов</span>
      <div class="checkbox">
        <label>
          <input
            type="checkbox"
            name="client-group"
            value="vip"
            v-model="attributes.clientGroup"
          /> VIP
        </label>
      </div>
      <div class="checkbox">
        <label>
          <input
            type="checkbox"
            name="client-group"
            value="trb"
            v-model="attributes.clientGroup"
          /> Проблемные
        </label>
      </div>
      <div class="checkbox">
        <label>
          <input
            type="checkbox"
            name="client-group"
            value="ins"
            v-model="attributes.clientGroup"
          /> ОМС
        </label>
      </div>
    </div>

    <div class="radio_box">
        <span class="label">Лечащий врач</span>
        <div class="checkbox">
          <label>
            <input
              type="radio"
              name="doctor"
              value="ivn"
              v-model="attributes.doctor"
            /> Иванов
          </label>
        </div>

        <div class="checkbox">
          <label>
            <input 
              type="radio"
              name="doctor"
              value="zhr"
              v-model="attributes.doctor"
            /> Захаров
          </label>
        </div>

        <div class="checkbox">
          <label>
            <input
              type="radio"
              name="doctor"
              value="chrn"
              v-model="attributes.doctor"
            /> Чернышева
          </label>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['attributes', 'attributeErrors'],
  computed: {
    onErrorLastName () {
      if (this.attributeErrors && this.attributeErrors.lastname.$error) {
        return 'input_error'
      } else {
        return ''
      }
    },
    onErrorFirstName () {
      if (this.attributeErrors && this.attributeErrors.firstname.$error) {
        return 'input_error'
      } else {
        return ''
      }
    },
    onErrorBirthDate () {
      if (this.attributeErrors && this.attributeErrors.birthDate.$error) {
        return 'input_error'
      } else {
        return ''
      }
    },
    onErrorPhoneNum () {
      if (this.attributeErrors && this.attributeErrors.phoneNum.$error) {
        return 'input_error'
      } else {
        return ''
      }
    },
    onErrorClientGroup () {
      if (this.attributeErrors && this.attributeErrors.clientGroup.$error) {
        return 'radio_box_error'
      } else {
        return ''
      }
    }
  }
}
</script>
