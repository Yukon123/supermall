<template>
    
  <div class="goods-list-item" @click="goodsClick">
    <img v-lazy="showImg" alt="" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
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
  computed: {
    showImg() {
      // return this.goodsItem.image || this.goodsItem.show.img;
      // return this.goodsItem.show.img || this.goodsItem.image;
      return (
        this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
      );
    },
  },
  methods: {
    // imgLoad() {
    //   this.$bus.$emit("imgLoad");
    // },
    goodsClick() {
      // this.$router.push("/detail/" + this.goodsItem.iid); 可以push对象或者完整字符串d
      //query传递的方式
      // this.$router.push({
      //   name: "detail",
      //   query: {
      //     iid: this.goodsItem.iid,
      //   },
      // });
      this.$router.push({
        name: "detail",
        params: { iid: this.goodsItem.iid || this.goodsItem.shop_id },
        // query: {
        //   iid: this.goodsItem.iid || this.goodsItem.shop_id,
        // },
      });
      // console.log("详情图点击");
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.goods-list-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods-list-item img {
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
  object-position: center;
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
.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>