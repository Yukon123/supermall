<template>
  <div class="tabbaritem" @click="clicked">
    <div v-if="isActive"><slot name="tabbarimga"></slot></div>
    <div v-else><slot name="tabbarimg"></slot></div>
    <div :style="activecolor"><slot name="tabbarname"></slot></div>
  </div>
</template>  

<script>
export default {
  name: "tabbaritem",
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
    activecolor() {
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
.tabbaritem {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tabbaritem img {
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 2px;
}
/* .active {
  color: red;
} */
</style>

