<template>
    
  <div class="wrapper" ref="wrapper">
    <div class="content"><slot></slot></div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import ObserveDOM from "@better-scroll/observe-dom";
BScroll.use(ObserveDOM);

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
    observeDOM: {
      Type: Boolean,
      default: true,
    },
    currentPosition: {
      Type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      scroll: null,
      currentIndex: 0,
    };
  },
  watch: {},
  computed: {},
  methods: {
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh();
    },

    finishPullUp() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
    },
    //滚动回最后位置函数
    scrollLastPosition() {
      this.scroll &&
        this.scroll.scrollTo &&
        this.scroll.scrollTo(0, this.currentPosition[this.currentIndex], 0); //父传子 $refs传过来的
    },
    //滚动到指定时间位置
    scrollToClick(position, time) {
      this.scroll &&
        this.scroll.scrollTo &&
        this.scroll.scrollTo(0, position, time);
    },
    // newRefresh() {
    //   this.scroll && this.scroll.refresh && this.scroll.refresh();
    //   console.log("刷新了一次");
    // },
  },

  created() {},
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
      observeDOM: this.observeDOM,
      // ...... 详见配置项
    });
    //上拉加载
    this.scroll.on("pullingUp", () => {
      this.$emit("loadMore");
      //直接在上啦加载中刷新页面感觉也可以 更方便
      // this.scroll.refresh();
      setTimeout(() => this.finishPullUp(), 2000);
    });

    //监听滚动
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
      // console.log(position);
    });
    console.log(this.scroll);
  },

  updated() {},
};
</script>
<style scoped>
</style>