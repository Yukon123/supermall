import Toast from "./Toast.vue"
const obj = {}
obj.install(vue){
    const toastContructor = Vue.extend(Toast)
    obj = new toastContructor()

}


export default obj