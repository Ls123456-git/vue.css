<template>
  <div class="chart-container">
    <div class="chart-search">
      <div class="search-item">
        <span>费用名称</span>
        <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
      </div>
      <div class="search-item">
        <span>设置人</span>
        <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
      </div>

      <el-button type="primary" style="width:100px;" @click="Search">新增</el-button>
      <el-button type="primary" style="width:100px;" @click="Search">启用</el-button>
      <el-button type="primary" style="width:100px;" @click="Search">停用</el-button>
      <el-button type="primary" style="width:100px;" @click="Search">导入</el-button>
      <el-button type="primary" style="width:100px;" @click="Search">导出</el-button>
    </div>
    
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
.chart-container {
  height: auto;
  overflow: hidden;
  padding: 0 15px;
  background: #fff;
}
.chart-search {
  height: auto;
  overflow: hidden;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
}
.search-item {
  display: inline-block;
  padding-right: 15px;
  display: flex;
}
span {
  width: 100px;
  margin-top: 10px;
}
</style>