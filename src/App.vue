<template>
  <div id="app">
    <keep-alive exclude="Detail"><RouterView /></keep-alive>
    <MainTabbar />
  </div>
</template>

<script>
import MainTabbar from "components/content/MainTabbar";

export default {
  name: "App",
  components: { MainTabbar },
};
</script>

<style scoped>
@import "./assets/css/base";
</style>
