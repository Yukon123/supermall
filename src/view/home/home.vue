<template>
  <div id="home">
    <Navbar class="home-nav"> <div slot="center">购物街</div> </Navbar>
    <TabbarControl
      :title="['流行', '新款', '精选']"
      class="tabControlBackup"
      @onClicked="changeGoodType"
      ref="tabControlBackup"
      v-show="showTabControl"
    />
    <BetterScroll
      class="home-scroll"
      ref="scroll"
      :probeType="2"
      :pullUpLoad="true"
      @loadMore="loadMoreGood"
      @scroll="scrollMethod"
      :currentPosition="currentPosition"
    >
      <!-- :currentIndex="currentIndex" -->
      <MySwiper :banners="banners" @swiperImgLoad.once="tabControlOffset" />
      <RecommendGoods :recommendGoods="recommendGoods" />
      <Feature />
      <TabbarControl
        :title="['流行', '新款', '精选']"
        class="tab-control"
        @onClicked="changeGoodType"
        ref="tabControl"
      />
      <GoodsList :goods="goods[goodType].list" />
    </BetterScroll>
    <ReturnTop @click.native="clickReturnTop" v-show="isBackTop" />
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar/Navbar";
import BetterScroll from "@/components/common/scroll/BetterScroll";
import MySwiper from "@/components/common/swiper/MySwiper";
import GoodsList from "@/components/content/goods/GoodsList";
import TabbarControl from "@/components/content/TabbarControl";
import ReturnTop from "@/components/content/ReturnTop";

import RecommendGoods from "./childcomps/RecommendGoods";
import Feature from "./childcomps/Feature";
import { getMulData, getProductData } from "@/network/homenet";

export default {
  name: "Home",
  components: {
    Navbar,
    BetterScroll,
    MySwiper,

    TabbarControl,
    GoodsList,
    ReturnTop,

    RecommendGoods,
    Feature,
  },
  props: {},
  data() {
    return {
      banners: [],
      page: 1,
      recommendGoods: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },

      goodTypeArray: ["pop", "new", "sell"],
      goodType: "new",

      isBackTop: false,
      offsetTop: 0,
      showTabControl: false,
      currentPosition: [0, 0, 0],
      currentIndex: 0,
    };
  },
  watch: {},
  computed: {},
  methods: {
    loadMoreGood() {
      this.getProductData(this.goodType);
    },
    //网络请求相关方法
    getMulData() {
      getMulData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommendGoods = res.data.recommend.list;
      });
    },

    getProductData(type) {
      const page = this.goods[type].page + 1;
      getProductData(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },

    // 函数方法
    clickReturnTop() {
      this.$refs.scroll.returnTop();
    },
    changeGoodType(index) {
      this.currentIndex = index;
      this.$refs.scroll.currentIndex = index;
      this.goodType = this.goodTypeArray[index];
      //自己写的感觉更简洁
      // switch (index) {
      //   case 0:
      //     this.goodType = "pop";
      //     break;
      //   case 1:
      //     this.goodType = "new";
      //     break;
      //   case 2:
      //     this.goodType = "sell";
      //     break;
      // }
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControlBackup.currentIndex = index;
      //发射当前位置给当前数组
      if (this.showTabControl) {
        this.$refs.scroll.scrollLastPosition();
      }

      //console.log(this.currentPosition);

      // if (this.currentPosition[index]) {
      //   console.log("5555");
      //   this.$refs.scroll.scrollLastPosition();
      // }
      // console.log(this.currentPosition[index]);
    },
    //滚动函数 和位置有关
    scrollMethod(position) {
      this.isBackTop = -position.y > 1000; //小图标返回判断
      this.showTabControl = -position.y > this.offsetTop; //第一个tabcontrol显示判断
      //传入tabcontrol位置数组
      this.currentPosition[this.currentIndex] = position.y;

      if (this.showTabControl) {
        this.currentPosition.forEach(function (value, index, arr) {
          arr[index] = value > -615 ? -615 : arr[index];
        });
      }
    },
    //一旦显示了 就给小于这个值的附初始值,然后滚动
    //给数组直接附初始值比较快
    // console.log("为真");
    // console.log(this.currentPosition);
    // () => console.log(this, "555");
    // //615是当前tabbarcontrol的offsettop的值
    // if (value > -615) {
    //   // value = -_self.offsetTop;
    //   arr[index] = -615;
    // value = -615;

    // console.log("value大于615", index, value);
    // }

    // console.log(index);
    // console.log(arr);

    // value = value < -615 ? -615 : value;

    // console.log(this.showTabControl);
    // // console.log(position);
    // console.log(this.showTabControl);

    //图片加载后计算tabbar的offset
    tabControlOffset() {
      this.offsetTop = this.$refs.tabControl.$el.offsetTop;
    },
  },

  created() {
    this.$nextTick(() => {
      this.getMulData();
      this.getProductData("new");
      this.getProductData("pop");
      this.getProductData("sell");
    });
  },

  mounted() {},
  // console.log(this._uid); // 输出9
  // this.$nextTick(() => {
  //   console.log(this._uid); //输出9
  // });
  // (() => {
  //   console.log(this._uid); //输出9
  // })();
  // () => {
  //   console.log(this._uid); //没有值 因为只是个函数定义
  // };
  // this.$watch("isBackTop", () => this.test()); //打印出找到this了

  // this.getProductData("new");
  // this.getProductData("pop");
  // this.getProductData("sell");
  // //监听图片加载的实时wrapper高度;
  // this.$bus.$on("imgLoad", () => {
  //   console.log("jieshoudaole");
  //   this.$refs.scroll.imgLoad();
  // });
  //vm.$nextTick：保证的是所有的子组件都挂载上去  子组件上面的内容不能保证
  // this.$nextTick(function () {
  //   console.log(this);
  //   this.offsetTop = this.$refs.tabControl.$el.offsetTop;
  //   console.log(this.offsetTop);
  // });

  updated() {
    // () => {
    //   console.log(this);
    // };  取不到值
  },
};
</script>
<style scoped>
.tabControlBackup {
  position: relative;
  z-index: 10;
  margin-top: -1px;
}
#home {
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: pink;
  color: #fff;

  /* position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 5; */
}

/* .tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
} */

.home-scroll {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
