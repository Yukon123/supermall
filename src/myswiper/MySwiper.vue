<template>
   
  <Swiper
    ref="mySwiper"
    :options="swiperOptions"
    v-if="banners && banners.length > 0"
  >
    <SwiperSlide v-for="(item, index) in banners" :key="index">
      <div class="slide-item">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </div>
    </SwiperSlide>

    <div class="swiper-pagination" slot="pagination"></div>
    <div></div>
  </Swiper>
</template>

<script>
import {
  swiper as Swiper,
  swiperSlide as SwiperSlide,
} from "vue-awesome-swiper";

import "swiper/dist/css/swiper";

export default {
  name: "myswiper",
  props: {
    banners: {
      type: Array,
      default: [],
    },
  },
  components: { Swiper, SwiperSlide },
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 800,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },

        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },

  updated() {
    console.log("Current Swiper instance object", this.swiper);
  },
};
</script>
<style scoped>

.slide-item {
  font-size: 0;
}

.slide-item img {
  width: 100%;
  padding-top: 44px;
}
</style>