<template>
  <div id="bottom-menu">
    <CheckButton
      ref="checkButton"
      class="select-all"
      @click.native="isChecked"
      :checked="isAllChecked"
    />
    <span>全选</span>
    <span class="total-price">合计: ${{ totalPrice }}</span>
    <span class="buy-product">去计算:( {{ totalCount }})</span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CheckButton from "./CheckButton";
export default {
  name: "ShopBottomBar",
  components: { CheckButton },
  props: {},
  data() {
    return {
      checkTag: true,
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["cartList", "cartCount"]),
    totalPrice() {
      return this.cartList
        .filter((item) => item.checked)
        .reduce((preValue, item) => {
          return preValue + item.count * item.nowPrice;
        }, 0)
        .toFixed(2);
    },
    totalCount() {
      return this.cartList.filter((item) => item.checked).length;
    },
    isAllChecked() {
      if (this.cartCount == 0) {
        return false;
      }
      return !this.cartList.find((item) => item.checked === false); //没找到假的返回undefined
    },
  },
  methods: {
    ...mapActions(["allCheckButton"]),
    isChecked() {
      // this.cartList.forEach((value) => (value.checked = !this.isAllChecked));
      this.allCheckButton(!this.isAllChecked);
      // if (this.isAllChecked) {
      //   this.cartList.forEach((value) => (value.checked = false));
      // } else {
      //   this.cartList.forEach((value) => (value.checked = true));
      // }
      console.log(this.isAllChecked);
    },
  },
  created() {},
  mounted() {},
  updated() {},
};
</script>
<style scoped>
#bottom-menu {
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 50px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
}

.select-all {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}

.total-price {
  margin-left: 15px;
  font-size: 16px;
  color: #666;
}

.buy-product {
  background-color: orangered;
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  float: right;
}
</style>