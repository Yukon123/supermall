<template>
  <div class="">
    <ShopcartListItem v-for="item in cartCount" :key="item" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ShopcartListItem from "./ShopcartListItem";
export default {
  name: "ShopcartList",
  components: { ShopcartListItem },
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