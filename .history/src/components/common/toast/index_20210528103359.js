import Toast from "./Toast.vue";

const obj = {};
obj.install = function (Vue) {
    const toastConstructor = Vue.extend(Toast);
    const toast = new toastConstructor(Toast);

    toast.$mount(document.createElement('div'));

    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast
}


export default obj