<template>
    
  <Navbar>
    <template #left>
      <div @click="imgBackClick" class="navbar-left">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
    </template>
    <template #center>
      <div class="navbar-center">
        <div
          v-for="(item, index) in titles"
          :key="item"
          class="navbar-center-item"
          @click="centerClick(index)"
          :class="{ activeCenter: currentIndex == index }"
        >
          {{ item }}
        </div>
      </div>
    </template>
    <template #right> </template>
  </Navbar>
</template>

<script>
import Navbar from "@/components/common/navbar/Navbar";
export default {
  name: "DetailNavbar",
  components: { Navbar },
  props: {},
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  watch: {},
  computed: {},
  methods: {
    imgBackClick() {
      //   this.$router.go(-1);//this.$router.go(-1)  应该是router 大路由
      this.$router.go(-1);
    },
    centerClick(index) {
      this.currentIndex = index;
      this.$emit("clickNavbarDetail", index);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.navbar-left {
  margin-top: 7px;
  touch-action: none;
}
.navbar-center {
  display: flex;
  touch-action: none;
}
.navbar-center-item {
  flex: 1;
}
.activeCenter {
  color: red;
}
</style>