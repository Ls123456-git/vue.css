<template>
  <div>
    <ag-grid-vue
      class="table ag-theme-balham"
      :columnDefs="columnDefs"
      :rowData="rowData"
      rowSelection="multiple"
      rowHeight="40"
      :enableSorting="true"
      :enableFilter="true"
      :enableColResize="true"
      :gridReady="onGridReady"
      :modelUpdated="onModelUpdated"
      :cellClicked="onCellClicked"
    ></ag-grid-vue>
    <div class="page"></div>
    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    <button @click="goto()">baojia</button>
    <button @click="goup()">up</button>
    <button @click="gun()">ui</button>
  </div>
</template>
<script>
import { AgGridVue } from "ag-grid-vue";

export default {
  props: {},
  components: {
    AgGridVue
  },
  data() {
    return {
      gridApi: null,
      columnApi: null,
      columnDefs: [
        { headerName: "", field: "", maxWidth: 44, checkboxSelection: true },
        { headerName: "序号", field: "name" },
        { headerName: "订单号", field: "gender" },
        { headerName: "网店明称", field: "age" },
        { headerName: "合计金额", field: "income" },
        { headerName: "正向物流费", field: "id" },
        { headerName: "计费重量(KG)", field: "kg" },
        { headerName: "订单模式", field: "moshi" },
        { headerName: "快递模式", field: "kuai" },
        { headerName: "配送方式", field: "pei" },
        { headerName: "物流单号", field: "hao" },
        { headerName: "上楼费用", field: "lou" },
        { headerName: "步梯费用", field: "bu" },
        { headerName: "截单费用", field: "jie" },
        { headerName: "逆向取件", field: "qu" }
      ],
      rowData: [
        {
          name: "1",
          gender: "b2019091601",
          age: "箭牌家具旗舰店",
          income: 15,
          id: 15,
          kg: 10,
          moshi: "普通订单",
          kuai: "京乐快递",
          pei: "圆通",
          hao: "8890"
        },
        {
          name: "2",
          gender: "b2019091602",
          age: "箭牌家具旗舰店",
          income: 25,
          id: 22,
          kg: 11,
          moshi: "普通订单",
          kuai: "京乐快递",
          pei: "圆通",
          hao: "8892"
        },
        {
          name: "3",
          gender: "b2019091603",
          age: "箭牌家具旗舰店",
          income: 18,
          id: 32,
          kg: 10,
          moshi: "普通订单",
          kuai: "京乐快递",
          pei: "圆通",
          hao: "8893"
        },
        {
          name: "4",
          gender: "b2019091604",
          age: "箭牌家具旗舰店",
          income: 20,
          id: 11,
          kg: 10,
          moshi: "普通订单",
          kuai: "京乐快递",
          pei: "圆通",
          hao: "8894"
        },
        {
          name: "5",
          gender: "b2019091605",
          age: "箭牌家具旗舰店",
          income: 25,
          id: 22,
          kg: 10,
          moshi: "普通订单",
          kuai: "京乐快递",
          pei: "圆通",
          hao: "8895"
        },
        {
          name: "6",
          gender: "b2019091606",
          age: "箭牌家具旗舰店",
          income: 18,
          id: 31,
          kg: 10,
          moshi: "普通订单",
          kuai: "京乐快递",
          pei: "圆通",
          hao: "8896"
        },
        {
          name: "7",
          gender: "b2019091607",
          age: "箭牌家具旗舰店",
          income: 20,
          id: 12,
          kg: 10,
          moshi: "普通订单",
          kuai: "京乐快递",
          pei: "圆通",
          hao: "8897"
        },
        {
          name: "8",
          gender: "b2019091608",
          age: "箭牌家具旗舰店",
          income: 25,
          id: 21,
          kg: 10,
          moshi: "普通订单",
          kuai: "京乐快递",
          pei: "圆通",
          hao: "8898"
        }
      ]
    };
  },

  computed: {},
  methods: {
    goto(){
      this.$router.push("./Baojia")
    },
    goup(){
      this.$router.push("./upload")
    },
     gun(){
      this.$router.push("./lian")
    },
    // 表格创建完成后执行
    onGridReady(params) {
      console.log(params);
      // 获取gridApi
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      // 调整表格列宽大小自适应
      this.gridApi.sizeColumnsToFit();
    },
    onModelUpdated(param) {
      console.log("onModelUpdated");
      console.log(param);
    },
    onCellClicked(cell) {
      console.log(cell);
      // 获取选中的单元格的数据
      console.log(cell.value);
      // 获取选中的单元格所在的行号，从0开始
      console.log(cell.rowIndex);
      // 获取选中的单元格所在行的所有数据
      console.log(cell.data);
      // 获取选中的单元格所在列的表头的headerName 和 field
      console.log(cell.colDef);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
.table {
  width: 100%;
  height: 400px;
}
.el-pagination {
  padding: 5px 800px;
  margin-top: 10px;
}
</style>