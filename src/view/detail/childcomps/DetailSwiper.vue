<template>
    <Swiper ref="detailSwiper" :options="swiperOptions">
    <SwiperSlide
      v-for="(item, index) in topImage"
      :key="item"
      class="swiper-slide"
    >
      <img :src="topImage[index]" alt="" />
    </SwiperSlide>
    <div class="swiper-pagination" slot="pagination"></div>
  </Swiper>
</template>

<script>
import {
  swiper as Swiper,
  swiperSlide as SwiperSlide,
} from "vue-awesome-swiper";

import "swiper/dist/css/swiper";
export default {
  name: "",
  components: { Swiper, SwiperSlide },
  props: {
    topImage: {
      Type: Array,
      default: [],
    },
  },
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
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.swiper-slide {
  height: 300px;
}
.swiper-slide img {
  vertical-align: bottom;
  width: 100vw;
  text-align: center;
}
</style>