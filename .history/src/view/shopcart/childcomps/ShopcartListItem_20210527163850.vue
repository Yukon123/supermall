<template>
  <div class="list-item">
    <div>{{ item.nowPrice }}</div>
    <div class="item-img"><img :src="item.image" alt="" /></div>
    <div class="item-text">
      <div class="item-title">{{ item.title }}</div>
      <div class="item-desc">{{ item.desc }}</div>
      <div class="item-bottom">
        <div class="item-newprise">{{ item.nowPrice }}</div>
        <div class="item-count"><input type="text" />{{ item.count }}</div>
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
}
.item-img img {
  height: 100px;
}
.item-text {
  flex: 1;
  overflow: hidden;
}
.item-title {
  overflow: hidden;
  height: 16px;
  line-height: 16px;
}
.item.desc {
  overflow: hidden;
  height: 16px;
  line-height: 16px;
}
</style>