<template>
  <div class="tabcontrol">
    <div
      v-for="(item, index) in title"
      class="tabcontrol-item"
      @click="clicked(index)"
      :class="{ active: currentIndex === index }"
      :key="item"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabbarControl",
  components: {},
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  watch: {},
  computed: {},
  methods: {
    clicked(index) {
      this.$emit("onClicked", index);
      this.currentIndex = index;
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.tabcontrol {
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  display: flex;
  background-color: #fff;
}
.tabcontrol-item {
  flex: 1;
}
.tabcontrol-item span {
  padding: 8px;
}

.active span {
  color: #f00;
  border-bottom: 1px solid red;
}
</style>