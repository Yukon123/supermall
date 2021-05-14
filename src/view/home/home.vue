<template>
    
  <div>
    <Navbar class="navbar"> <div slot="center">购物街</div> </Navbar>
    <MySwiper :banners="banners" />
    <RecommendGoods :recommendGoods="recommendGoods" />
    <Feature />
    <TabbarControl :title="['流行', '新款', '精选']" class="tab-control" />
    <GoodsList :goods="goods.pop.list" />

    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import Navbar from "components/common/navbar/Navbar";

import RecommendGoods from "./childcomps/RecommendGoods";
import Feature from "./childcomps/Feature";
import HomeSwiper from "./childcomps/HomeSwiper";

import MySwiper from "@/myswiper/MySwiper";

import GoodsList from "components/content/goods/GoodsList";
import TabbarControl from "components/content/TabbarControl";

import { getMulData, getProductData } from "network/homenet";

export default {
  name: "home",
  components: {
    Navbar,
    RecommendGoods,
    HomeSwiper,
    Feature,
    TabbarControl,
    GoodsList,

    MySwiper,

    getMulData,
    getProductData,
  },
  props: {},
  data() {
    return {
      banners: [],
      page: 1,
      recommendGoods: [],
      // goods: {
      //   pop: { page: 0, list: [] },
      //   new: { page: 0, list: [] },
      //   sell: { page: 0, list: [] },
      // },
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  watch: {},
  computed: {},
  methods: {
    getMulData() {
      getMulData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommendGoods = res.data.recommend.list;
      });
    },

    // getProductData(type) {
    //   // const page = this.goods.type[list] + 1;
    //   const page = this.goods[type].page + 1;
    //   console.log(page);
    //   getProductData(type, page).then((res) => {
    //     console.log(res);
    //     this.goods[type].list.push(...res.data.list);
    //   });
    // },
    getProductData(type) {
      const page = this.goods[type].page + 1;

      getProductData(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },

  created() {
    this.getMulData();

    this.getProductData("new");
    this.getProductData("pop");
    this.getProductData("sell");
  },

  mounted() {},
};
</script>
<style scoped>
.navbar {
  background-color: pink;
  color: #fff;
  /* position: fixed; */
  z-index: 5;
  width: 100%;
}

.tab-control {
  position: sticky;
  top: 44px;
}
</style>
