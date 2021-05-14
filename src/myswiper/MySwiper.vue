<template>
   
  <swiper
    ref="my-swiper"
    :options="swiperOptions"
    v-if="banners && banners.length > 0"
  >
    <swiper-slide v-for="(item, index) in banners" :key="index">
      <div class="slide-item">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </div>
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
    <div></div>
  </swiper>
</template>

<script>
import { swiper, swiperslide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper";

export default {
  name: "MySwiper",
  props: {
    banners: {
      type: Array,
      default: [],
    },
  },
  components: { swiper, swiperslide },
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
        // Some Swiper option/callback...
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.my - swiper.swiper;
    },
  },
  mounted() {
    this.$nextTick(function () {
      console.log(this, swiper);
      // Code that will run only after the
      // entire view has been rendered
    });
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