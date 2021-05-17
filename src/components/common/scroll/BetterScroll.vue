<template>
    
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

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
    let bs = new BScroll(this.$refs.wrapper, {
      pullUpLoad: true,
    });
    bs.on("pullingUp", () => {
      setTimeout(() => bs.finishPullUp(), 5000);
      console.log("jiazhai");
    });
  },
};
</script>
<style scoped>
</style>