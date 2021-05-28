<template>
    
  <div class="shopcart">
    <Navbar class="shopcart-navbar">
      <template #center>
        <div>购物车({{ cartCount }})</div>
      </template>
    </Navbar>
    <BetterScroll
      class="shopcart-scroll"
      ref="scroll"
      :probeType="2"
      :pullUpLoad="true"
    >
      <ShopcartList />
    </BetterScroll>
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar/Navbar";
import BetterScroll from "@/components/common/scroll/BetterScroll";
import ShopcartList from "./childcomps/ShopcartList";
import { mapGetters } from "vuex";
export default {
  name: "Category",
  components: { Navbar, BetterScroll, ShopcartList },
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
.shopcart {
  height: 100vh;
}
.shopcart-navbar {
  background-color: var(--color-high-text);
}
.shopcart-navbar div {
  color: #fff;
}
.shopcart-scroll {
  overflow: hidden;
  /* position: absolute;
  top: 44px;
  bottom: 40px;
  left: 0;
  right: 0; */
  position: relative;
  height: calc(100% -44px -66px);
}
</style>