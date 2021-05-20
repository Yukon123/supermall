<template>
    
  <div class="goods-list">
    <GoodsListItem
      v-for="(item, index) in goods"
      :key="index + item.iid"
      :goodsItem="item"
    ></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
//goodsitem 要加id
export default {
  name: "GoodsList",
  components: { GoodsListItem },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
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
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
  /* z-index: 4; */
}
</style>