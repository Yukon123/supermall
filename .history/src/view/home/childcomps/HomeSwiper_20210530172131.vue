<template>
   
  <Swiper
    ref="mySwiper"
    :options="swiperOptions"
    v-if="banners && banners.length > 0"
  >
    <SwiperSlide v-for="item in banners" :key="item.link">
      <div class="slide-item">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad" />
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
          bulletActiveClass: "my-bullet-active",
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  methods: {
    imgLoad() {
      this.$emit("swiperImgLoad");
    },
  },
  updated() {
    // console.log("Current Swiper instance object", this.swiper);
  },
};
</script>
<style >
.slide-item {
  font-size: 0;
}

.slide-item img {
  width: 100%;
  /* padding-top: 44px; */
}
.my-bullet-active {
  background: #ff6600;
  opacity: 1;
}
</style>