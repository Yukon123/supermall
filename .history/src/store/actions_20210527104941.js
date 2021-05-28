import { ADD_TO_CART, ADD_COUNT } from "./mutationsType"
export default {
    addCart({ commit, state }, payload) {
        // console.log("3333333");
        // console.log("AAAAAA", JSON.parse(JSON.stringify(state.cartList)));
        // console.log(info);
        // 1.查看是否添加过
        let oldInfo = state.cartList.find(value => value.iid === payload.iid)
        // 2.+1或者新添加
        if (oldInfo) {
            commit(ADD_COUNT, oldInfo)

        } else {
            payload.checked = true
            commit(ADD_TO_CART, payload)
        }
        // console.log("购物车", JSON.parse(JSON.stringify(context.state.cartList)));

    }
}