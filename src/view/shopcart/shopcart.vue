<template>
  <div>
    <h1 v-html="abb">555</h1>
    <h2>{{ a ? b : b + 1 }}{{ abb }}</h2>
  </div>
</template>


<script>
export default {
  name: "Shopcart",
  components: {},
  props: {},
  data() {
    return { a: 0, b: 2, abb: "<div>3213<div>" };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
</style>