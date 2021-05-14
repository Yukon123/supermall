<template>
    
  <div class="GoodsList">
    <GoodslistItem
      v-for="(item, index) in goods"
      :goodsItem="item"
    ></GoodslistItem>
  </div>
</template>

<script>
import GoodslistItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components: { GoodslistItem },
  props: {
    goods: {
      type: Array,
      default() {
        return {};
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
.GoodsList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
  z-index: 4;
}
</style>