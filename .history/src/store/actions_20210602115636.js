import {
    ADD_TO_CART,
    ADD_COUNT,
    ADD_CART_COUNT,
    CUT_CART_COUNT,
    CHANGE_GOODS_CHECKED,
    CHANGE_ALL_CHECKED,
} from "./mutationsType"
export default {
    addCart({ commit, state }, payload) {

        return new Promise((resolve, reject) => {
            let oldInfo = state.cartList.find(value => value.iid === payload.iid)

            if (oldInfo) {
                commit(ADD_COUNT, oldInfo)
                resolve("商品数量加一")

            } else {
                payload.checked = true
                commit(ADD_TO_CART, payload)
                resolve("添加新商品")
            }
        })

        // console.log("购物车", JSON.parse(JSON.stringify(context.state.cartList)));

    },
    addCartCount({ commit }, item) {
        commit(ADD_CART_COUNT, item);
    },
    cutCartCount({ commit, state }, item) {
        return new Promise((resolve) => {
            if (item.count <= 1) {
                resolve("该宝贝不能再减少了哦")
                return;
            }
            commit(CUT_CART_COUNT, item);

        })
    },
    changeGoodsChecked({ commit }, index) {
        commit(CHANGE_GOODS_CHECKED, index)
    },
    allCheckButton({ commit }, flag) {
        commit(CHANGE_ALL_CHECKED, flag)
    }

}