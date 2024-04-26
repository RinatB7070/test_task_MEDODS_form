<template>
  <div id="app">
    <button class="create_client_btn" @click="openForm" v-if="!displayForm">Создать клиента</button>
    <form @submit.prevent="createClient" v-if="displayForm">
      <div class="form_box">
        <div class="form_header">
          <h1 class="form_header_text">Создание клиента</h1>
          <button class="close_btn" @click="closeForm"></button>
        </div>
        <p class="form_tip">Создайте заявку, и в ближайшее время наши специалисты свяжутся с вами.</p>
        <CreateFormAttributes 
          :attributes="clientData.attributes"
          :attributeErrors="errors.attributeErrors"
        ></CreateFormAttributes>
        <CreateFormAddress
          :address="clientData.address"
          :addressErrors="errors.addressErrors"
          ></CreateFormAddress>
        <CreateFormPassport
          :passport="clientData.passport"
          :passportErrors="errors.passportErrors"
          ></CreateFormPassport>
        <div class="form_footer">
          <div class="checkbox" id="sms_toggle">
            <label><input type="checkbox" id="sms_toggle" :checked="clientData.acceptSms" v-model="clientData.acceptSms"/> Не отправлять СМС</label>
          </div>
          <button type="submit" class="send_btn">Отправить</button>
        </div>
      </div>
    </form>
    <CreateFormAlert :alert="alert" @closeAlert="closeAlert"></CreateFormAlert>
  </div>
</template>

<script>
import CreateFormAttributes from './components/CreateForm/CreateFormAttributes.vue';
import CreateFormAddress from './components/CreateForm/CreateFormAddress.vue'
import CreateFormPassport from './components/CreateForm/CreateFormPassport.vue'
import CreateFormAlert from './components/CreateForm/CreateFormAlert.vue'
import useVuelidate from '@vuelidate/core'
import { required, numeric } from '@vuelidate/validators'
export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data () {
    return {
      displayForm: false,
      alert: null,
      clientData: {
        attributes: {
          lastname: '',
          firstname: '',
          patronymic: '',
          birthDate: '',
          phoneNum: '',
          gender: 'man',
          clientGroup: [],
          doctor: '',
        },
        address: {
          index: '',
          country: '',
          area: '',
          city: '',
          street: '',
          house: ''
        },
        passport: {
          docType: '',
          series: '',
          passNumber: '',
          releaseBy: '',
          releaseDate: ''
        },
        acceptSms: false,
      },
      errors: {
        attributeErrors: null,
        addressErrors: null,
        passportErrors: null
      }
    }
  },
  validations () {
    return {
      clientData: {
        attributes: {
          lastname: { required },
          firstname: { required },
          birthDate: { required },
          phoneNum: { required, numeric },
          clientGroup: { required },
        },
        address: {
          city: { required }
        },
        passport: {
          docType: { required },
          releaseDate: { required }
        },
      }
    }
  },
  methods: {
    openForm () {
      this.displayForm = true
    },
    closeForm () {
      this.displayForm = false
    },
    closeAlert () {
      this.alert = null
    },
    createClient () {
      this.v$.$validate()
      if (!this.v$.$error) {
        this.alert =  {
          type: 'sucsess',
          title: 'Успех',
          message: 'Клиент успешно создан!',
        }
      } else {
        console.log('form error')
        this.alert =  {
          type: 'error',
          title: 'Ошибка',
          message: 'Пожалуйста заполните форму правильно.'
        }
        this.errors.attributeErrors = this.v$.clientData.attributes
        this.errors.addressErrors = this.v$.clientData.address
        this.errors.passportErrors = this.v$.clientData.passport
        console.log(this.v$)
      }
    }
  },
  components: {
    CreateFormAttributes,
    CreateFormAddress,
    CreateFormPassport,
    CreateFormAlert
  }
}
</script>
