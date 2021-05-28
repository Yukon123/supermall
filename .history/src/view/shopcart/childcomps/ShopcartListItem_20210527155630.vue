<template>
  <div class="list-item">
    {{ cartList }}
    <div></div>
    <div class="item-img"><img :src="cartList.image" alt="" /></div>
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