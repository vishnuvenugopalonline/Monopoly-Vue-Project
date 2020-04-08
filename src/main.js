import Vue from 'vue'
import board from './components/newBoard.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(board)
}).$mount('#app')
