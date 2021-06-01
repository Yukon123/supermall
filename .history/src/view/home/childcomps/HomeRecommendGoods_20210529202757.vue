<template>
    
  <div>
    <div class="recommend-goods">
      <div
        v-for="(item, index) in recommendGoods"
        class="recommend-goods-item"
        :key="index"
      >
        <a :href="item.link">
          <img v-lazy="item.image" alt="" />
          <div>{{ item.title }}</div>
        </a>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "RecommendGoods",
  components: {},
  props: {
    recommendGoods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.recommend-goods {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;

  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}

.recommend-goods-item {
  flex: 1;
}

.recommend-goods-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
  vertical-align: bottom;
}
</style>