<template>
    
  <div class="">
    <Navbar class="category-navbar">
      <template #center>
        <div>购物车({{ $store.state.cartList.length }})</div>
      </template>
    </Navbar>
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar/Navbar";
export default {
  name: "Category",
  components: { Navbar },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.category-navbar {
  background-color: deeppink;
}
.category-navbar div {
  color: #fff;
}
</style>