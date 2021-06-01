<template>
  <div class="" id="detail">
    <DetailNavbar @clickNavbarDetail="scrollToClick" ref="detailNavbar" />
    <BetterScroll
      class="detail-scroll"
      ref="detailScroll"
      :probeType="2"
      :pullUpLoad="true"
      @scroll="scrollDetail"
    >
      <DetailSwiper
        :topImage="topImage"
        v-if="topImage && topImage.length > 0"
      />
      <DetailBaseInfo :goods="goods" />
      <DetailShopInfo :shop="shop" />
      <DetailGoodsinfo
        :goodsInfo="goodsInfo"
        @detailGoodsInfoLoad="calcOffsetTopDetail"
      />
      <DetailParamInfo :paramInfo="paramInfo" ref="detailParam" />
      <DetailCommentInfo :commentInfo="commentInfo" ref="detailComment" />
      <DetailRecommendInfo :goods="recommendInfo" ref="detailRecommend" />
    </BetterScroll>
    <DetailBottomBar @addToCart="addToCart" />
    <ReturnTop @click.native="clickReturnTop" v-show="isBackTop" />
  </div>
</template>

<script>
import BetterScroll from "@/components/common/scroll/BetterScroll";
import { mapActions, mapGetters, mapState } from "vuex";
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
import DetailBottomBar from "./childcomps/DetailBottomBar";
import ReturnTop from "@/components/content/ReturnTop";

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
    DetailBottomBar,
    ReturnTop,
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

      isBackTop: false,
      payload: {},
      test: 0,
    };
  },
  watch: {},
  computed: {
    // ...mapState(["cartList", "aqiu", "yukon"]),
    // ...mapGetters(["cartList"]),
    ...mapState({
      cartList: cartList,
      aqiu: yukon.aqiu,
      yukon: yukon,
    }),
  },
  methods: {
    ...mapActions(["addCart"]),
    //计算各个组件的offsetTop
    calcOffsetTopDetail() {
      // this.$refs.detailScroll.newRefresh();
      console.log("接收到了计算offsetTop");
      this.paramOffsetTop = this.$refs.detailParam.$el.offsetTop;
      this.commentOffsetTop = this.$refs.detailComment.$el.offsetTop;
      this.recommendOffsetTop = this.$refs.detailRecommend.$el.offsetTop;

      console.log("参数", this.paramOffsetTop);
      console.log("评论", this.commentOffsetTop);
      console.log("推荐", this.recommendOffsetTop);
    },
    //滚动到navbar点击的位置
    //FIXME:
    scrollToClick(index) {
      // this.$refs.detailScroll.newRefresh();
      let position = 0;
      switch (index) {
        case 0:
          position = 0;
          break;
        case 1:
          position = this.paramOffsetTop;
          break;
        case 2:
          position = this.commentOffsetTop;
          break;
        case 3:
          position = this.recommendOffsetTop;
          break;
      }
      this.$refs.detailScroll.scrollToClick(-position, 1000);
    },
    scrollDetail(position) {
      this.isBackTop = -position.y > 1000;
      if (-position.y >= this.paramOffsetTop) {
        this.$refs.detailNavbar.currentIndex = 1;
        if (-position.y >= this.commentOffsetTop) {
          this.$refs.detailNavbar.currentIndex = 2;
          if (-position.y >= this.recommendOffsetTop) {
            this.$refs.detailNavbar.currentIndex = 3;
          }
        }
      } else {
        this.$refs.detailNavbar.currentIndex = 0;
      }
    },
    //
    clickReturnTop() {
      this.$refs.detailScroll.scrollToClick(0, 1000);
    },

    //添加到购物车
    addToCart() {
      const obj = {};
      // 2.对象信息
      obj.iid = this.iid;
      // obj.imgURL = this.topImages[0];
      obj.title = this.goods.title;
      obj.desc = this.goods.desc;
      obj.nowPrice = this.goods.nowPrice;
      obj.image = this.topImage[0];
      obj.count = 1;
      obj.checked = true;

      // console.log("添加前", this.$store.state.cartList);
      // console.log("get前", this.cartList);
      // console.log(
      //   "购物车深考前",
      //   JSON.parse(JSON.stringify(this.$store.state.cartList))
      // );

      // console.log(obj);
      if (obj.iid && obj.desc && obj.image && obj.nowPrice && obj.title) {
        this.addCart(obj).then((res) => {
          // console.log(this.$toast);

          this.$toast.show(res, 2000);

          // console.log(res);
          console.log(this.cartList);
          console.log(this.aqiu);
          console.log(this.yukon);
          console.log(this.yukon.aqiu);
        });
      }

      // this.$store.dispatch("addCart", obj).then((res) => console.log(res));
      // console.log("2222222");
      // console.log(this.test);
      // this.test += 1;
      // console.log(this.test);
      // console.log("添加后", this.$store.state.cartList);

      // console.log("get后", this.cartList);

      // console.log(
      //   "购物车深考后",
      //   JSON.parse(JSON.stringify(this.$store.state.cartList))
      // );
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
  mounted() {
    console.log(this.cartList);
  },
  updated() {
    console.log(this.cartList);
  },

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

  /* height: calc(100vh - 44px - 40px); */
}
</style>