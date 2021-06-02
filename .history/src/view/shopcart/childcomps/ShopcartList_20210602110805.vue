<template>
  <div class="shopcart-list">
    <ShopcartListItem
      v-for="(value, index) in getSession"
      :key="index"
      :item="value"
      :itemIndex="index"
    />
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
    ...mapGetters(["cartList", "cartCount", "getSession"]),
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
</style>