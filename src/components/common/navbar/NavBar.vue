<template>
    
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.nav-bar {
  width: 100%;
  height: 44px;
  line-height: 44px;
  display: flex;
  text-align: center;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.2);
  touch-action: none;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>