<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="new-price">{{ goods.newPrice }}</span>
      <span class="old-price">{{ goods.oldPrice }}</span>
      <span class="discount-price">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span v-for="index in goods.columns.length - 1" :key="index">
        {{ goods.columns[index - 1] }}
      </span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="indey in goods.services.length - 1"
        :key="indey"
      >
        <img :src="goods.services[indey - 1].icon" alt="" />
        <span>{{ goods.services[indey - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  components: {},
  props: {
    goods: {
      Type: Object,
      default: {},
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
<style scoped>
.base-info {
  /* padding-top: 15px; */
  padding: 15px 8px 0px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}

.info-title {
  color: #222;
}

.info-price {
  padding-top: 10px;
}

.info-price .new-price {
  font-size: 24px;
  color: red;
}

.info-price .old-price {
  font-size: 13px;
  padding-left: 5px;
  text-decoration: line-through;
}

.info-price .discount-price {
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: pink;
  border-radius: 8px;
  margin-left: 5px;

  /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -8px;
}

.info-other {
  padding-top: 15px;
  line-height: 30px;
  display: flex;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  justify-content: space-between;
}

.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}

.info-service-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}

.info-service-item span {
  font-size: 13px;
  color: #333;
}
</style>