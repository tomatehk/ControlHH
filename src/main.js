// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueIdb from 'vue-idb'
import lodash from 'lodash'
import VueLodash from 'vue-lodash'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueIdb)
Vue.use(VueLodash, lodash)

const idb = new VueIdb({
  database: 'controlhhDB',
  schemas: [
    { user: 'id, name, password' },
    { room: 'id, label, created_at, updated_at' }
  ]
})

new Vue({
	el: '#app',
	router,
	idb: idb,
	template: '<App/>',
	components: { App }
})
