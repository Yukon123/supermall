const getters = {
    // cartList: (state) => {
    //     return state.cartList
    // },
    //两种写法  直接在getters里面写函数就行
    cartList(state) {
        return state.cartList
    },
    cartCount: (state) => {
        return state.cartList.length
    },
    goodsCount: (state) => (index) => {
        return state.cartList[index].count
    },
}


export default getters
