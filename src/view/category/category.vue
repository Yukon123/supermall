<template>
  <div>
    <div class="wrapper">
      <div class="content">
        <ul>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
          <li>jkljk</li>
        </ul>
      </div>
    </div>

    <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
    <p>kljkjkljjljkljaskldjaldjkladjakdj</p>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);
export default {
  name: "category",
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
    this.$nextTick(function () {
      console.log(this);
    });
  },

  updated() {
    console.log(bs.y);
  },
};
</script>
<style scoped>
.wrapper {
  height: 500px;
  overflow: hidden;
}
</style>