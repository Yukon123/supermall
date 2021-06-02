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
      console.log(this);
      console.log(arr);
    }
    fn.apply(o, ["pink"]);
  },
};
</script>
<style scoped>
.test {
}
</style>