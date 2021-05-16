<template>
    
  <div class="">
    <img
      @click="onClick"
      v-show="isShow"
      src="~assets/img/common/top.png"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    isShow: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    onClick() {
      this.$emit("clickReturnTop");
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
div {
  position: relative;
}
div img {
  width: 50px;
  position: fixed;
  right: 10px;
  bottom: 55px;
}
</style>