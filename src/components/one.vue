<template>
  <div class="chart-container">
    <div class="chart-search">
      <h2>任务列表</h2>
      <div class="search-item">
        <el-button-group>
          <el-button
            v-for="(item,index) in items"
            :type="item.value==time?'primary':''"
            :key="index"
            @click="checkItem(item)"
          >{{item.text}}</el-button>
        </el-button-group>
      </div>
      <div class="search-item">
        <span class="demonstration">订单开始时间</span>
        <el-date-picker
          v-model="value1"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
      <div class="search-item">
        <span class="dan"></span>
        <el-input v-model="input" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
      </div>
    </div>
    <div class="main" style="position: relative;"></div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="传统电商" name="first" :key="'first'">
        <online></online>
      </el-tab-pane>
      <el-tab-pane label="新零售" name="second" :key="'second'">
        <retail></retail>
      </el-tab-pane>
    </el-tabs>
    <el-button type="primary" style="position: absolute;width: 80px;right:266px;top:65px">查询</el-button>
    <el-button
      type="primary"
      style="position: absolute;width: 80px;right:156px;top:65px"
      @click="centerDialogVisible = true"
    >导入</el-button>
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="50%" height="50%" center>
      <el-button size="small" icon="el-icon-download" @click="downLoadExlce">模板下载</el-button>
      <el-upload
        ref="upload"
        :action="uploadUrl"
        :limit="1"
        :before-upload="beforeUpload"
        :headers="token"
        :data="importData"
        accept=".xls"
        class="up-class"
        :on-success="uploadSuccess"
        :show-file-list="false"
        :auto-upload="true"
      >
        <el-button
          slot="trigger"
          size="small"
          type="primary"
          class="el-icon-plus el-icon-upload"
        >导入数据</el-button>
      </el-upload>
    </el-dialog>
    <el-button type="primary" style="position: absolute;width: 80px;right:51px;top:65px">导出</el-button>
  </div>
</template>
<script>
import online from "./online";
import retail from "./retail";
export default {
  components: {
    online,
    retail
  },
  data() {
    return {
      centerDialogVisible: false,
      items: [
        { text: "快递", value: "today" },
        { text: "物流", value: "yesterday" },
        { text: "顺丰", value: "7day" },
        { text: "全部", value: "30day" }
      ],
      time: "today",
      dateTime: "",
      type: "primary",
      activeName: "first",
      isFirst: true,
      isSecond: false
    };
  },
  computed: {},
  methods: {
    checkItem: function(item) {
      this.time = item.value;
    },
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
.el-tabs /deep/ .el-tabs__nav-wrap::after {
  background-color: white;
}
.chart-container {
  height: auto;
  overflow: hidden;
  padding: 0 15px;
  background: #fff;
}
h2 {
  font-size: 18px;
}
.chart-search {
  height: auto;
  overflow: hidden;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-around;
  
}
.search-item {
  display: inline-block;
  height: auto;
  overflow: hidden;
  float: left;
  padding-right: 15px;
}
</style>