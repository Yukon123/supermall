<template>
  <div class="swiper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <div class="swiper-item" v-for="item in banners">
        <swiper-slide>
          <a :href="item.link">
            <img :src="item.image" alt="" />
          </a>
        </swiper-slide>
        <swiper-slide>
          <a :href="item.link">
            <img :src="item.image" alt="" />
          </a>
        </swiper-slide>
        <swiper-slide><div>555</div></swiper-slide>
      </div>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "carrousel",
  props: {
    banners: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>
<style scoped>
.swiper-item img {
  width: 100%;
}
</style>