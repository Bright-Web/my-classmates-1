import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Coolness from './components/anton/Coolness'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [{
  name: "Coolness",
  path: "/coolness",
  component: Coolness
}];

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
