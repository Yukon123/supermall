<template>
  <!-- 路径的话在build wpbase配置里面给路径起别名这样就不用担心调换文件夹位置 -->
  <!-- v-slot 用语法糖# -->
    
  <div class="main-tabbar">
    <Tabbar>
      <TabbarItem path="/home">
        <template #tabbar-img>
          <img src="~assets/img/tabbar/home.svg" alt="首页" />
        </template>
        <template #tabbar-img-a>
          <img src="~assets/img/tabbar/home_active.svg" alt="首页" />
        </template>
        <template #tabbar-name>
          <div>首页</div>
        </template>
      </TabbarItem>
      <TabbarItem path="/category">
        <template #tabbar-img>
          <img src="~assets/img/tabbar/category.svg" alt="分类" />
        </template>
        <template #tabbar-img-a>
          <img src="~assets/img/tabbar/category_active.svg" alt="分类" />
        </template>
        <template #tabbar-name>
          <div>分类</div>
        </template>
      </TabbarItem>
      <TabbarItem path="/shopcart">
        <template #tabbar-img>
          <img src="~assets/img/tabbar/shopcart.svg" alt="购物车" />
        </template>
        <template #tabbar-img-a>
          <img src="~assets/img/tabbar/shopcart_active.svg" alt="购物车" />
        </template>
        <template #tabbar-name>
          <div>购物车</div>
        </template>
      </TabbarItem>
      <TabbarItem path="/profile">
        <template #tabbar-img>
          <img src="~assets/img/tabbar/profile.svg" alt="我的" />
        </template>
        <template #tabbar-img-a>
          <img src="~assets/img/tabbar/profile_active.svg" alt="我的" />
        </template>
        <template #tabbar-name>
          <div>我的</div>
        </template>
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
.main-tabbar {
  touch-action: none;
}
</style>