import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"


Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();//store也是这样的全局属性,但是帮你自动实现了数据绑定

new Vue({
    render: h => h(App),
    store,
    router,
}).$mount('#app')
