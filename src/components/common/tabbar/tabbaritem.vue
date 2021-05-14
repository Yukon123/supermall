<template>
  <div class="tabbar-item" @click="clicked">
    <div v-if="isActive"><slot name="tabbar-img-a"></slot></div>
    <div v-else><slot name="tabbar-img"></slot></div>
    <div :style="activeColor"><slot name="tabbar-name"></slot></div>
  </div>
</template>  

<script>
export default {
  name: "TabbarItem",
  components: {},
  props: {
    path: String,
    acolor: {
      type: String,
      default: "red",
    },
  },
  //   data() {
  //     return { isActive: true };
  //   },
  watch: {},
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeColor() {
      return this.isActive ? { color: this.acolor } : {};
    },
  },
  methods: {
    clicked() {
      //   console.log("点击了");
      this.$router.push(this.path);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tabbar-item img {
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 2px;
}
/* .active {
  color: red;
} */
</style>

