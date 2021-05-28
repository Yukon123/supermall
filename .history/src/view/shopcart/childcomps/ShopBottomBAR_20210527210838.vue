<template>
  <div id="bottomb-bar">
    <div class="click-all">
      <CheckButton />
      <div>全选挂载上去了</div>
    </div>
    <div class="total-price">合计:$+{{ totalPrice }}</div>
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
        .filters((item) => item.checked)
        .reduce((preValue, item) => {
          preValue + item.count * item.price;
        }, 0);
    },
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
</style>