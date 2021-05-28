<template>
  <div class="list-item">
    {{ cartList }}
    <div></div>
    <div class="item-img"><img :src="cartList.image" alt="" /></div>
    <div>
      <div class="item-title">{{ cartList.title }}</div>
      <div class="item-desc">{{ cartList.desc }}</div>
      <div>
        <span class="item-newprise">{{ "¥" + cartlist.newprise }}</span>
        <span class="item-count">{{ cartList.count }}</span>
      </div>
    </div>
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