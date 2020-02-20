import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [];

const router = new VueRouter({
  routes,
  mode: 'history'
  })

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
