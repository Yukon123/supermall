import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

Vue.use(Vuex)
var cartData = Arr.from(JSON.parse(sessionStorage.getItem("cartData") || "[]"))
const store = new Vuex.Store({
    // strict: true,
    state: {
        count: 0,
        cartList: cartData,
        yukon: {
            aqiu: 1
        }
    },
    mutations,
    actions,
    getters,
})

export default store

//空数组在以下三种遍历中均不可更改：forEach、map和for...in
// state.cartList.forEach((value, index, arr) => {

//     console.log(arr.length);



//     if (arr.length == 0 || value.iid !== payload.iid) {
//         // value.count += 1
//         console.log(payload);
//         console.log(arr);

//         arr.push(payload)
//     }
//     else {
//         console.log(arr);

//         arr[index].count += 1
//     }

// });
