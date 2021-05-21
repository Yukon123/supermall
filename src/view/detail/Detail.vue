<template>
    
  <div class="" :id="iid">
    <DetailNavbar />
    <h1>挂载上去了{{ iid }}</h1>
  </div>
</template>

<script>
import DetailNavbar from "./childcomps/DetailNavbar";
export default {
  name: "Detail",
  components: { DetailNavbar },
  props: {
    // iid: {
    //   Type: Number,
    //   default: 0,
    // },
  },
  data() {
    return {
      iid: 0,
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    this.iid = this.$route.query.iid || this.$route.params.iid;
  },
  mounted() {},
};
</script>
<style scoped>
</style>