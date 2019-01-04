import Vue from 'vue'
import VeeValidate from 'vee-validate';
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VeeValidate)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
