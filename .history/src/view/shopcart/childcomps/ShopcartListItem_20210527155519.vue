<template>
  <div class="">
    {{ cartList }}
    <div></div>
    <div></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ShopcartListItem",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    ...mapGetters({
      cartList: "cartList",
      cartCount: "cartCount",
    }),
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
</style>