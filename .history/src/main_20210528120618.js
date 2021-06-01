import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import toast from "@/components/common/toast"

import FastClick from "fastclick"

FastClick.attach(document.body);//全局注册然后挂载到body上
Vue.config.productionTip = false
Vue.use(toast)  //Vue.use 是要执行install函数
Vue.prototype.$bus = new Vue();//store也是这样的全局属性,但是帮你自动实现了数据绑定

new Vue({
    render: h => h(App),
    store,
    router,
}).$mount('#app')
