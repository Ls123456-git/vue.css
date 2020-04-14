<template>
  <div>
      <el-tabs v-model="activeName">
            <el-tab-pane label="订单查询" name="first" :key="'first'">
                <One></One>
            </el-tab-pane>
            <el-tab-pane label="月度账单" name="second" :key="'second'">
                <Two></Two>    
            </el-tab-pane>
        </el-tabs>
  </div>
  
</template>
<script>
import One from "./one";
import Two from "./two";
export default {
  components: {
    One,
    Two
  },
  data() {
    return {
      // 默认第一个Tab
      activeName: "first",
      isFirst: true,
      isSecond: false
    };
  },
  methods: {
    
    handleClick(tab) {
      if (tab.name === "first") {
        this.isFirst = true;
        this.isSecond = false;
      } else if (tab.name === "second") {
        this.isFirst = false;
        this.isSecond = true;
      }
    }
  }
};
</script>
<style scoped lang="">
</style>