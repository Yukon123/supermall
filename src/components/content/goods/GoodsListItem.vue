<template>
    
  <div class="G">
    <img :src="goodsItem.show.img" alt="" />
    <div class="goods-info">
      <!-- <p>{{ goodsItem.title }}</p> -->
      <span>价格{{ goodsItem.price }}</span>
      <span>收藏数{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  components: {},
  props: {
    goodsItem: {
      type: Object,
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
.G {
  padding-bottom: 40px;
  position: relative;

  width: 48%;
}

.G img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: red;
  margin-right: 20px;
}

/* .goods-info .collect {
  position: relative;
} */

/* .goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
} */
</style>