<template>
    <Swiper ref="detailSwiper" :options="swiperOptions" class="swiper-detail">
    <SwiperSlide
      v-for="(item, index) in topImage"
      :key="item"
      class="swiper-slide-detail"
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
          bulletActiveClass: "bullet-active-detail",
        },
      },
      imgCount: 0,
    };
  },
  watch: {},
  computed: {},
  methods: {
    // imgLoad() {
    //   主要监听的是goods列表的加载
    //   没啥必要监听swiper图片的加载  因为goods图片加载完成后 还是点击跳转位置就错了
    //   this.$emit("detailSwiperload");
    //   console.log(this.imgCount);
    //   if (this.imgCount == this.topImage.length) {
    //     this.$emit("detailSwiperload");
    //   }
    // },
  },

  created() {},
  mounted() {},
};
</script>
<style scoped>
.swiper-detail /deep/ .bullet-active-detail {
  background-color: red;
  opacity: 1;
}
.swiper-slide-detail {
  height: 300px;
}
.swiper-slide-detail img {
  vertical-align: bottom;
  width: 100vw;
  text-align: center;
}
</style>