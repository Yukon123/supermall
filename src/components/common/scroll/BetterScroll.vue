<template>
    
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);

export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    let bs = new BScroll(".wrapper", {
      probeType: 3,
      pullUpLoad: true,
      // ...... 详见配置项
    });
    //
    bs.on("pullingUp", () => {
      console.log("加载");
      setTimeout(() => bs.finishPullUp(), 5000);
    });
    // this.$nextTick(function () {
    //   console.log(this);
    // });
  },
};
</script>

<style scoped>
.wrapper {
  height: 100vh;
}
</style>