import { ADD_TO_CART, ADD_COUNT, ADD_CART_COUNT, CUT_CART_COUNT } from "./mutationsType"
export default {
    [ADD_TO_CART](state, payload) {
        state.cartList.push(payload);
    },
    [ADD_COUNT](state, oldInfo) {
        oldInfo.count++;
    },
    [ADD_CART_COUNT](state, item) {
        console.log("-------");
        item.count++
    },
    [CUT_CART_COUNT](state, item) {
        console.log("-------");
        item.count--
    },
}