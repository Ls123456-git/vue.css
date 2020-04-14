<template>
  <div>
    <el-row :gutter="27">
      <el-col :span="3">
        <h2>任务列表</h2>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-button-group>
            <el-button
              v-for="(item,index) in items"
              :type="item.value==time?'primary':''"
              :key="index"
              @click="checkItem(item)"
            >{{item.text}}</el-button>
          </el-button-group>
        </div>
      </el-col>
      <el-col :span="15">
        <div class="grid-content bg-purple">
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
          <span>年</span>
          <el-select v-model="value" placeholder="上">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <span>半年</span>
          <el-select v-model="value" placeholder="所有">
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
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "dengmiQuery",
  data() {
    return {
      items: [
        { text: "通过", value: "today" },
        { text: "未通过", value: "yesterday" },
        { text: "全部", value: "30day" }
      ],
      dengmiQueryForm: {
        mimian: "",
        mimu: "",
        mige: "",
        midi: "",
        zuozhe: "",
        midiLength: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped lang="">
.el-row {
  margin-bottom: 25px;
}
h2 {
  font-size: 15px;
}

.grid-content {
  border-radius: 4px;
  min-height: 20px;
}
.row-bg {
  padding: 15px 0;
  background-color: #f9fafc;
}
</style>