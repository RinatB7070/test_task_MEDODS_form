import Vue from 'vue'
import App from './App.vue'
import './styles/style.scss'

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
