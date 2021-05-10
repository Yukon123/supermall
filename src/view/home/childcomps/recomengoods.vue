<template>
    
  <div>
    <div class="recommengoods">
      <div v-for="item in recommengoods" class="recommengoodItem">
        <a :href="item.link">
          <img :src="item.image" alt="" />
          <div>{{ item.title }}</div>
        </a>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "recommengoods",
  components: {},
  props: {
    recommengoods: {
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
.recommengoods {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;

  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}

.recommengoodItem {
  flex: 1;
}

.recommengoodItem img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>