<template>
  <div class="test">this is test page !</div>
</template>

<script>
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
    var o = {
      name: "abab",
    };
    function fn(arr) {
      console.log("this", this);
      console.log("arr", arr);
    }
    function a(arr) {
      console.log("aa");
    }
    // fn();
    fn.apply(a, ["pink"]);
  },
};
</script>
<style scoped>
.test {
}
</style>