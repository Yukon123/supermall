<template>
  <div id="bottomb-bar">
    <div class="click-all bar-item">
      <CheckButton />
      <div>全选</div>
    </div>
    <div class="total-price bar-item">合计: ${{ totalPrice }}</div>
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
      this.$store.state.cartList
        .filter((item) => item.checked)
        .reduce((preValue, item) => {
          console.log(preValue);

          return (preValue += item.count * item.nowPrice);
        }, 0);
    },
  },
  methods: {},
  created() {},
  mounted() {},
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