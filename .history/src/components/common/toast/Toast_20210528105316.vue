<template>
    
  <div v-if="isShow" class="toast">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  components: {},
  props: {},
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  watch: {},
  computed: {},
  methods: {
    show(message = "默认内容", time = 1000) {
      console.log("zujianmeiwenti");

      this.message = message;
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
      }, time);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.toast {
  position: absolute;
  right: 50%;
  bottom: 50%;
  z-index: 999;

  transform: translate(50%, 50%);

  padding: 10px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>