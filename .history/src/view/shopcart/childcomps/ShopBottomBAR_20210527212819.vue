<template>
  <div id="bottomb-bar">
    <div class="click-all bar-item">
      <CheckButton />
      <div>全选</div>
    </div>
    <div class="total-price bar-item">合计: ${{ totalPrice }}</div>
    <div class="total-count bar-item"></div>
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