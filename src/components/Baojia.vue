<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="物流报价" name="first" :key="'first'">
        <baowuliu></baowuliu>
      </el-tab-pane>
      <el-tab-pane label="快递报价" name="second" :key="'second'">
        <baokuai></baokuai>
      </el-tab-pane>
      <el-tab-pane label="顺丰报价" name="three" :key="'second'">
        <baoshun></baoshun>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import baowuliu from "./baowuliu";
import baokuai from "./baokuai";
import baoshun from "./baoshun";
export default {
  props: {},
  components: {
    baowuliu,
    baokuai,
    baoshun
  },
  data() {
    return {
      activeName: "first",
      isFirst: true,
      isSecond: false,
      three: true
    };
  },
  computed: {},
  methods: {
    handleClick(tab) {
      if (tab.name === "first") {
        this.isFirst = true;
        this.isSecond = false;
      } else if (tab.name === "second") {
        this.isFirst = false;
        this.isSecond = true;
      }else if(tab.name=="three"){
         this.isFirst = false;
        this.isSecond = true;
        this.three=false;
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
</style>