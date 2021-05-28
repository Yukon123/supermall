<template>
  <div class="">{{ cartList }}</div>
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