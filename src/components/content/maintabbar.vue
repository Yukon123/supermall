<template>
  <!-- 路径的话在build wpbase配置里面给路径起别名这样就不用担心调换文件夹位置 -->

    
  <div class="">
    <tabbar>
      <tabbaritem path="/home">
        <img slot="tabbarimg" src="~assets/img/tabbar/home.svg" alt="首页" />
        <img
          slot="tabbarimga"
          src="~assets/img/tabbar/home_active.svg"
          alt="首页"
        />
        <div slot="tabbarname">首页</div>
      </tabbaritem>
      <tabbaritem path="category">
        <img
          slot="tabbarimg"
          src="~assets/img/tabbar/category.svg"
          alt="分类"
        />
        <img
          slot="tabbarimga"
          src="~assets/img/tabbar/category_active.svg"
          alt="首页"
        />
        <div slot="tabbarname">分类</div>
      </tabbaritem>
      <tabbaritem path="/shopcart">
        <img
          slot="tabbarimg"
          src="~assets/img/tabbar/shopcart.svg"
          alt="购物车"
        />
        <img
          slot="tabbarimga"
          src="~assets/img/tabbar/shopcart_active.svg"
          alt="首页"
        />
        <div slot="tabbarname">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile">
        <img slot="tabbarimg" src="~assets/img/tabbar/profile.svg" alt="我的" />
        <img
          slot="tabbarimga"
          src="~assets/img/tabbar/profile_active.svg"
          alt="首页"
        />
        <div slot="tabbarname">我的</div>
      </tabbaritem>
    </tabbar>
  </div>
</template>

<script>
import tabbaritem from "components/common/tabbar/tabbaritem";
import tabbar from "components/common/tabbar/tabbar";
export default {
  name: "maintabbar",
  components: { tabbar, tabbaritem },
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