<template>
    
  <div class="scrollbar">
    <div ref="wrapper" class="scrollbar-wrapper">
      <ul class="scrollbar-content">
        <li v-for="i of 40" :key="i" class="scrollbar-content-item">
          {{ `I am item ${i} ` }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
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
</style>