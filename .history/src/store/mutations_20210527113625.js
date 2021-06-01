import { ADD_TO_CART, ADD_COUNT } from "./mutationsType"
export default {
    [ADD_TO_CART](state, payload) {
        state.cartList.push(payload);
    },
    [ADD_COUNT](state, oldInfo) {
        oldInfo.count++;
    }

}