<template>
  <div>
    <el-button type="text" @click="centerDialogVisible = true">打开</el-button>

    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
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
        <el-form-item label="即时配送">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
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
      centerDialogVisible: false
      // items: [
      //   { text: "快递", value: "today" },
      //   { text: "物流", value: "yesterday" },
      //   { text: "顺丰", value: "7day" },
      //   { text: "全部", value: "30day" }
      // ]
    };
  },
  computed: {},
  methods: {
    onSubmit() {
      console.log("submit!");
    }
    // httpRequest(e) {
    //   let file = e.file; // 文件信息
    //   if (!file) {
    //     // 没有文件
    //     return false;
    //   } else if (!/\.(xls|xlsx)$/.test(file.name.toLowerCase())) {
    //     // 格式根据自己需求定义
    //     this.$message.error("上传格式不正确，请上传xls或者xlsx格式");
    //     return false;
    //   }
    //   const fileReader = new FileReader();
    //   fileReader.onload = ev => {
    //     try {
    //       const data = ev.target.result;
    //       const workbook = XLSX.read(data, {
    //         type: "binary" // 以字符编码的方式解析
    //       });
    //       const exlname = workbook.SheetNames[0]; // 取第一张表
    //       const exl = XLSX.utils.sheet_to_json(workbook.Sheets[exlname]); //生成json表格内容
    //       // 将 JSON 数据挂到 data 里
    //       this.tableData = exl;
    //       // document.getElementsByName('file')[0].value = ''
    //       // 根据自己需求，可重置上传value为空，允许重复上传同一文件
    //     } catch (e) {
    //       console.log("出错了：：");
    //       return false;
    //     }
    //   };
    //   fileReader.readAsBinaryString(file);
    // }
  },
  created() {},
  mounted() {}
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
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-input {
  width: 150px;
}
</style>