<template>
    
  <div class="">
    <Navbar class="category-navbar">
      <template #center>
        <div>购物车({{ cartCount }})</div>
      </template>
    </Navbar>
    <BetterScroll class="shopcart-scroll"> </BetterScroll>
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar/Navbar";
import BetterScroll from "@/components/common/scroll/BetterScroll";
import { mapGetters } from "vuex";
export default {
  name: "Category",
  components: { Navbar, BetterScroll },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    ...mapGetters({
      cartList: "cartList",
      cartCount: "cartCount",
    }),
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.category-navbar {
  background-color: var(--color-high-text);
}
.category-navbar div {
  color: #fff;
}
.shopcart-scroll {
  height: calc(100%- 40px -40px);
}
</style>