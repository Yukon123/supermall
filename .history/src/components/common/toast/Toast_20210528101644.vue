<template>
    
  <div class="toast">
    <div v-show="isShow">{{ message }}</div>
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
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.toast {
  position: fixed;
  right: 50%;
  bottom: 50%;

  transform: translate(50%, 50%);

  background-color: rgba(0 0 0 0.5);
}
</style>