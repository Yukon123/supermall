<template>
  <div class="list-item">
    <div></div>
    <div class="item-img"><img :src="item.image" alt="" /></div>
    <div class="item-text">
      <div class="item-title">{{ item.title }}</div>
      <div class="item-desc">{{ item.desc }}</div>
      <div>
        <span class="item-newprise">{{ "¥" + item.newprise }}</span>
        <span class="item-count">{{ item.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  name: "ShopitemItem",
  components: {},
  props: {
    item: {
      Type: Object,
      default: {},
    },
  },
  data() {
    return {};
  },
  watch: {},
  computed: {
    // ...mapGetters({
    //   cartList: "cartList",
    //   cartCount: "cartCount",
    // }),
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.list-item {
  display: flex;
}
.item-img {
  flex: 1;
  height: 60px;
}
.item-text {
  flex: 1;
}
</style>