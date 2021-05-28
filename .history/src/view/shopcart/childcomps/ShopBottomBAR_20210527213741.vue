<template>
  <div id="bottom-menu">
    <CheckButton class="select-all" />
    <span>全选</span>
    <span class="total-price">合计: ${{ totalPrice }}</span>
    <span class="buy-product">去计算:( {{ totalCount }})</span>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";
export default {
  name: "",
  components: { CheckButton },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    totalPrice() {
      return this.$store.state.cartList
        .filter((item) => item.checked)
        .reduce((preValue, item) => {
          console.log(preValue);
          return item.count * item.nowPrice;
        }, 0)
        .toFixed(2);
    },
    totalCount() {
      return this.$store.state.cartList.filter((item) => item.checked).length;
    },
  },
  methods: {},
  created() {},
  mounted() {},
  updated() {},
};
</script>
<style scoped>
#bottomb-bar {
  height: 30px;
  background-color: red;
  display: flex;
}
.bar-item {
  flex: 1;
}
</style>