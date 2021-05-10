<template>
    
  <div>
    <navbar class="nvbar"> <div slot="center">购物街</div> </navbar>
    <homeswiper :banners="banners"></homeswiper>

    <recommengoods :recommengoods="recommengoods"></recommengoods>
  </div>
</template>

<script>
import navbar from "components/common/navbar/NavBar.vue";
import recommengoods from "./childcomps/recomengoods";
import homeswiper from "./childcomps/homeswiper";

import { getMulData } from "network/homenet";
export default {
  name: "home",
  components: { navbar, getMulData, recommengoods, homeswiper },
  props: {},
  data() {
    return { banners: [], recommengoods: [] };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    getMulData().then((res) => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommengoods = res.data.recommend.list;
    });
  },
  mounted() {},
};
</script>
<style scoped>
.navbar {
  background-color: pink;
  color: #fff;
}
</style>
