import Toast from "./Toast.vue"
const obj = {}
obj.install(vue){
    toastConstructor = Vue.extend(Toast)
    obj = new toastConstructor()

}


export default obj