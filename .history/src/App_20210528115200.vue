<template>
  <div id="app">
    <keep-alive exclude="Detail"><RouterView /></keep-alive>
    <MainTabbar />
  </div>
</template>

<script>
import MainTabbar from "components/content/MainTabbar";
import Fastclick from "fastclick";
// FastClick.attach(document.body);
export default {
  name: "App",
  components: { MainTabbar, Fastclick },
};
</script>

<style scoped>
@import "./assets/css/base";
</style>
