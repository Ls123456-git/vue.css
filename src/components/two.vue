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
        <span>查询周期</span>
        <el-select
          v-model="yearsModel"
          @change="dateChange(1)"
          placeholder="请选择"
          style="width:100px;"
        >
          <el-option
            v-for="item in years"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <span>上</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <span>半年</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <span>季度</span>
        <el-select
          v-model="monthsModel"
          @change="dateChange(2)"
          placeholder="请选择"
          style="width:100px;"
        >
          <el-option
            v-for="item in months"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <span>月</span>
      </div>
    </div>
    <div class="main" style="position: relative;"></div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="传统电商" name="first" :key="'first'">
        <chuan></chuan>
      </el-tab-pane>
      <el-tab-pane label="新零售" name="second" :key="'second'">
        <ling></ling>
      </el-tab-pane>
    </el-tabs>

    <el-button
      type="primary"
      @click="Search"
      style="position: absolute;width: 95px;right: 421px;top:65px"
    >查询</el-button>
    <el-button
      type="primary"
      style="position: absolute;width: 95px;right: 310px;top:65px"
      @click="Search"
    >导出</el-button>
    <el-button
      type="primary"
      style="position: absolute;width: 95px;right: 198px;top:65px"
      @click="centerDialogVisible = true"
    >费用结算</el-button>
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
          <span>元</span>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
          <span>元</span>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
          <span>元</span>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
          <span>元</span>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
          <span>元</span>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
          <span>元</span>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
          <span>元</span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-button
      type="primary"
      style="position: absolute;width: 95px;right: 85px;top:65px"
      @click="Search"
    >生成结算单</el-button>
  </div>
</template>
<script>
import ling from "./ling";
import chuan from "./chuan";
export default {
  name: "summary",
  components: {
    ling,
    chuan
  },
  data: function() {
    return {
      centerDialogVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      items: [
        { text: "通过", value: "today" },
        { text: "未通过", value: "yesterday" },
        { text: "全部", value: "7day" }
      ],
      time: "today",
      dateTime: "",
      type: "primary",
      loading: true,
      bar: {},
      line: {},
      yearsModel: null,
      years: [],
      monthsModel: null,
      months: [],
      daysModel: null,
      days: []
    };
  },
  props: ["value"],
  created() {
    this.init();
  },
  watch: {
    value: function(val, oldval) {
      console.log(val);
    }
  },

  methods: {
    onSubmit() {
      console.log("submit!");
    },
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
    },
    init() {
      var myDate = new Date();
      var year = myDate.getFullYear(); //获取当前年
      var month = myDate.getMonth() + 1; //获取当前月
      var day = myDate.getDate(); //获取当前日

      this.initSelectYear(year);
      this.initSelectMonth();
      this.initSelectDay(year, month);
      this.yearsModel = year;
      this.monthsModel = month;
      this.daysModel = day;
      let obj = {
        year: this.yearsModel,
        month: this.monthsModel,
        day: this.daysModel
      };
      this.$parent.dateChange(obj);
    },
    initSelectYear(year) {
      this.years = [];
      for (let i = 0; i < 30; i++) {
        this.years.push({ value: year - i, label: year - i + "年" });
      }
    },
    initSelectMonth() {
      this.months = [];
      this.months.push({ value: 0, label: "全部" });
      for (let i = 1; i <= 12; i++) {
        this.months.push({ value: i, label: i + "月" });
      }
    },
    initSelectDay(year, month) {
      var maxDay = this.getMaxDay(year, month);
      this.days = [];
      this.days.push({ value: 0, label: "全部" });
      for (var i = 1; i <= maxDay; i++) {
        this.days.push({ value: i, label: i + "日" });
      }
    },
    dateChange(type) {
      //1年 2月 3日 4 左 5右
      if (type == 1 || type == 2) {
        if (this.monthsModel == 0) {
          this.daysModel = 0;
          this.initSelectDay(this.yearsModel, 1);
        } else {
          this.initSelectDay(this.yearsModel, this.monthsModel);
        }
      }
      if (type == 4) {
        this.dayleft();
      }
      if (type == 5) {
        this.dayright();
      }
    }
  }
};
</script>
<style lang="" scoped>
.el-tabs /deep/ .el-tabs__nav-wrap::after {
  background-color: white;
}
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
h2 {
  font-size: 18px;
}
.search-item {
  display: inline-block;
  height: auto;
  overflow: hidden;
  float: left;
  padding-right: 15px;
}
.el-input{
  width: 150px;
} 
</style>