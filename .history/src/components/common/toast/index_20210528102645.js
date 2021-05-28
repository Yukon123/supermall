import Toast from "./Toast.vue"
const obj = {}
obj.install(vue){
    const toastConstructor = Vue.extend(Toast)
    obj = new toastConstructor()

}


export default obj