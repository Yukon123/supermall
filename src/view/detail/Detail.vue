<template>
    
  <div class="" id="detail">
    <DetailNavbar />
    <BetterScroll
      class="detail-scroll"
      ref="detailScroll"
      :probeType="2"
      :pullUpLoad="true"
    >
      <DetailSwiper
        :topImage="topImage"
        v-if="topImage && topImage.length > 0"
        @detailSwiperload="ParamsOffsetTopDetail"
      />
      <DetailBaseInfo :goods="goods" />
      <DetailShopInfo :shop="shop" />
      <DetailGoodsinfo
        :goodsInfo="goodsInfo"
        @detailGoodsInfoLoad="ParamsOffsetTopDetail"
      />
      <DetailParamInfo :paramInfo="paramInfo" ref="detailParam" />
      <DetailCommentInfo :commentInfo="commentInfo" ref="detailComment" />
      <DetailRecommendInfo :goods="recommendInfo" ref="detailRecommend" />
    </BetterScroll>
  </div>
</template>

<script>
import BetterScroll from "@/components/common/scroll/BetterScroll";
import {
  getDetailData,
  getRecommendInfo,
  Goods,
  GoodsParam,
  Shop,
} from "@/network/detail";
import DetailNavbar from "./childcomps/DetailNavbar";
import DetailSwiper from "./childcomps/DetailSwiper";
import DetailBaseInfo from "./childcomps/DetailBaseInfo";
import DetailShopInfo from "./childcomps/DetailShopInfo";
import DetailGoodsinfo from "./childcomps/DetailGoodsinfo";
import DetailParamInfo from "./childcomps/DetailParamInfo";
import DetailCommentInfo from "./childcomps/DetailCommentInfo";
import DetailRecommendInfo from "@/components/content/goods/GoodsList";

export default {
  name: "Detail",
  components: {
    BetterScroll,
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsinfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
  },
  props: {},
  data() {
    return {
      iid: 0,
      topImage: [],
      goods: {},
      shop: {},
      goodsInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendInfo: [],
      paramOffsetTop: 0,
      commentOffsetTop: 0,
      recommendOffsetTop: 0,
    };
  },
  watch: {},
  computed: {},
  methods: {
    //计算各个组件的offsetTop
    ParamsOffsetTopDetail() {
      console.log("接收到了计算offsetTop");
      this.paramOffsetTop = this.$refs.detailParam.$el.offsetTop;
      this.commentOffsetTop = this.$refs.detailComment.$el.offsetTop;
      this.recommendOffsetTop = this.$refs.detailRecommend.$el.offsetTop;
      console.log(this.paramOffsetTop);
      console.log(this.commentOffsetTop);
      console.log(this.recommendOffsetTop);
    },
  },
  created() {
    this.iid = this.$route.query.iid || this.$route.params.iid;
    //请求数据 并存入一个对象中,比较容易存取
    getDetailData(this.iid).then((res) => {
      console.log("detail", res);
      this.topImage = res.result.itemInfo.topImages;
      this.goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      this.shop = new Shop(res.result.shopInfo);
      this.goodsInfo = res.result.detailInfo;
      this.paramInfo = new GoodsParam(
        res.result.itemParams.info,
        res.result.itemParams.rule
      );
      // this.commentInfo = res.result.rate.list[0];
      res.result.rate.list ? (this.commentInfo = res.result.rate.list[0]) : "";
      console.log(this.goods);
      console.log(this.shop);
      console.log("goodsInfo", this.goodsInfo);
      console.log(this.paramInfo);
      console.log("commentInfo", this.commentInfo);

      // this.topImage = res.data.banner.list;
    });
    getRecommendInfo().then((res) => {
      // console.log(res);
      this.recommendInfo = res.data.list;
      // console.log(res);
      // console.log(this.recommendInfo);
    });
  },
  mounted() {},
  updated() {},

  destroyed() {},
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-scroll {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 40px;
  left: 0;
  right: 0;
}
</style>