import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false


import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper /* { default options with global component } */ );


new Vue({
    render: h => h(App),
    router,

}).$mount('#app')