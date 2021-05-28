<template>
    
  <div class="">
    <Navbar class="shopcart-navbar">
      <template #center>
        <div>购物车({{ cartCount }})</div>
      </template>
    </Navbar>
    <ShopcartList />
    <BetterScroll
      class="shopcart-scroll"
      ref="scroll"
      :probeType="2"
      :pullUpLoad="true"
    >
      <ShopcartList />
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
      <ul>
        555
      </ul>
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
.shopcart-navbar {
  background-color: var(--color-high-text);
  height: 100vh;
}
.shopcart-navbar div {
  color: #fff;
}
.shopcart-scroll {
  height: calc(100%- 40px -40px);
}
</style>