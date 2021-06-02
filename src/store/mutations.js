import {
    ADD_TO_CART,
    ADD_COUNT,
    ADD_CART_COUNT,
    CUT_CART_COUNT,
    CHANGE_GOODS_CHECKED,
    CHANGE_ALL_CHECKED,
} from "./mutationsType"

export default {
    [ADD_TO_CART](state, payload) {
        state.cartList.push(payload);
        sessionStorage.setItem("cartData", JSON.stringify(state.cartList));
    },
    [ADD_COUNT](state, oldInfo) {
        oldInfo.count++;
        sessionStorage.setItem("cartData", JSON.stringify(state.cartList));

    },
    [ADD_CART_COUNT](state, item) {
        item.count++;
        sessionStorage.setItem("cartData", JSON.stringify(state.cartList));
    },
    [CUT_CART_COUNT](state, item) {
        item.count--;
        sessionStorage.setItem("cartData", JSON.stringify(state.cartList));
    },
    [CHANGE_GOODS_CHECKED](state, index) {
        state.cartList[index].checked = !state.cartList[index].checked
        sessionStorage.setItem("cartData", JSON.stringify(state.cartList));
    },
    [CHANGE_ALL_CHECKED](state, flag) {
        state.cartList.forEach((value) => value.checked = flag)
        sessionStorage.setItem("cartData", JSON.stringify(state.cartList));
    },


}