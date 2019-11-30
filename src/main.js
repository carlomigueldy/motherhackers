import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'
import './registerServiceWorker'


Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  router,
  vuetify: new Vuetify({
    icons: {
      iconfont: 'mdi',
    }
  }),
  render: h => h(App),
}).$mount('#app')
