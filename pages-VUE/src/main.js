import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuedragscreenshot from 'vue-drag-screenshot'
import vueInputTags from 'vue-input-tags'
import svgJs from "./svg/index"
import vuemindmapping from 'vue-mind-mapping'
 
Vue.use(vuemindmapping)
Vue.use(svgJs);
Vue.use(vuedragscreenshot)
Vue.use(vueInputTags)
Vue.config.productionTip = false
Vue.prototype.$baseUrl = process.env.BASE_URL

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
