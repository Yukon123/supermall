<template>
  <!-- 路径的话在build wpbase配置里面给路径起别名这样就不用担心调换文件夹位置 -->

    
  <div class="">
    <Tabbar>
      <TabbarItem path="/home">
        <img slot="tabbar-img" src="~assets/img/tabbar/home.svg" alt="首页" />
        <img
          slot="tabbar-img-a"
          src="~assets/img/tabbar/home_active.svg"
          alt="首页"
        />
        <div slot="tabbar-name">首页</div>
      </TabbarItem>
      <TabbarItem path="/category">
        <img
          slot="tabbar-img"
          src="~assets/img/tabbar/category.svg"
          alt="分类"
        />
        <img
          slot="tabbar-img-a"
          src="~assets/img/tabbar/category_active.svg"
          alt="首页"
        />
        <div slot="tabbar-name">分类</div>
      </TabbarItem>
      <TabbarItem path="/shopcart">
        <img
          slot="tabbar-img"
          src="~assets/img/tabbar/shopcart.svg"
          alt="购物车"
        />
        <img
          slot="tabbar-img-a"
          src="~assets/img/tabbar/shopcart_active.svg"
          alt="首页"
        />
        <div slot="tabbar-name">购物车</div>
      </TabbarItem>
      <TabbarItem path="/profile">
        <img
          slot="tabbar-img"
          src="~assets/img/tabbar/profile.svg"
          alt="我的"
        />
        <img
          slot="tabbar-img-a"
          src="~assets/img/tabbar/profile_active.svg"
          alt="首页"
        />
        <div slot="tabbar-name">我的</div>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import TabbarItem from "components/common/tabbar/TabbarItem";
import Tabbar from "components/common/tabbar/Tabbar";
export default {
  name: "MainTabbar",
  components: { Tabbar, TabbarItem },
  props: {},
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
</style>