<template>
    
  <div class="toast">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name:"Toast",
  components: {},
  props: {},
  data() {
    return {
    message:""
    isShow:false
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
.toast {
}
</style>