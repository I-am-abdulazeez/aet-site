/* eslint-disable no-unused-vars */
import Vue from 'vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

import App from './App.vue'


Vue.config.productionTip = false

Vue.use(Viewer);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')