<template>
    
  <div class="wrapper" ref="wrapper">
    <div class="content"><slot></slot></div>
    <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "BetterScroll",
  components: {},
  props: {
    probeType: {
      Type: Number,
      default: 0,
    },
    pullUpLoad: {
      Type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
      message: "hhh",
    };
  },
  watch: {},
  computed: {},
  methods: {
    imgLoad() {
      this.scroll && this.scroll.refresh && this.scroll.refresh();
    },

    //返回上面TabControl
    returnTop() {
      this.scroll &&
        this.scroll.scrollTo &&
        this.scroll.scrollTo(0, -606, 1000);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
    },
  },

  created() {},
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
      // ...... 详见配置项
    });
    //上拉加载
    this.scroll.on("pullingUp", () => {
      this.$emit("loadMore");
      //直接在上啦加载中刷新页面感觉也可以 更方便
      this.scroll.refresh();
      setTimeout(() => this.finishPullUp(), 2000);
    });

    //监听滚动
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    console.log(this.scroll);
  },

  updated() {},
};
</script>
<style scoped>
</style>