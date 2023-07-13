<template>
  <div
    class="h- w-full flex items-center fixed top-0 left-0 right-0 justify-between bg-gray-400 text-dark-800 z-50"
  >
    <span
      class="flex justify-center items-center text-3xl font-bold text-gray-100"
    >
      <i class="el-icon-guide ml-15 mr-7 text-5xl"></i>
      锦江旅行社
    </span>
    <div>
      <el-menu
        router
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#9ca3af"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/" style="font-size: large">首页</el-menu-item>
        <el-menu-item index="/consult" style="font-size: large"
          >旅游咨询</el-menu-item
        >
        <el-menu-item index="/order" style="font-size: large"
          >机票订购</el-menu-item
        >
        <el-menu-item index="/appreciate" style="font-size: large"
          >风景欣赏</el-menu-item
        >
        <el-menu-item index="/intro" style="font-size: large"
          >公司简介</el-menu-item
        >
      </el-menu>
    </div>
    <el-dropdown style="cursor: pointer">
      <span class="el-dropdown-link text-xl text-light-100">
        账号<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="editTicket()">机票管理</el-dropdown-item>
        <el-dropdown-item @click.native="logout()">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dialog title="已订机票" :modal="false" :visible.sync="reservedTicketDialogVisible">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="departure" label="起点" width="120" />
        <el-table-column prop="destination" label="目的" width="120" />
        <el-table-column prop="travelTime" label="日期" width="100" />
        <el-table-column prop="price" label="价格" width="100" />
        <el-table-column prop="taxation" label="税费" width="100" />
        <el-table-column prop="meals" label="餐食" width="100" />
        <el-table-column prop="flight" label="航班" width="120" />
        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
            <el-button link type="primary" size="small" @click="() => Edit(scope.row)">改签</el-button>
            <el-button link type="primary" size="small" @click="() => EditDelete(scope.row.ticketId)">退票</el-button>
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="reservedTicketDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="reservedTicketDialogVisible = false"> 确 定</el-button>
      </span>
    </el-dialog>

    <!-- 添加对话框  -->
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :modal="false"
    >
      <!-- 1.  :visible.sync="dialogVisible" 这个属性动态绑定 dialogVisible 如果为 true 就显示该对话框 -->
      <!-- 动态绑定 catagory 数据对象, catagory 在数据池定义-->
      <el-form :model="ticket">
        <el-form-item label="起点">
          <el-input v-model="ticket.departure" autocomplete="off"  readonly></el-input>
        </el-form-item>
        <el-form-item label="目的">
          <el-input v-model="ticket.destination" autocomplete="off" readonly></el-input>
        </el-form-item>
        <el-form-item label="日期">
          <el-select v-model="selectTravelTime" placeholder="请选择" @change="handleSelectChange" class="custom-select">
            <el-option v-for="item in rebookTable" :key="item.id" :label="item.travelTime" :value="item.travelTime"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="ticket.price" autocomplete="off" readonly></el-input>
        </el-form-item>
        <el-form-item label="税费">
          <el-input v-model="ticket.taxation" autocomplete="off" readonly></el-input>
        </el-form-item>
        <el-form-item label="餐食">
          <el-input v-model="ticket.meals" autocomplete="off" readonly></el-input>
        </el-form-item>
        <el-form-item label="航班">
          <el-input v-model="ticket.flight" autocomplete="off" readonly></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="Update">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
        :visible.sync="deleteDialogVisible"
        title="提示"
        width="30%"
        :modal="false"
    >
      <span>确定退票吗</span>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="deleteDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="Delete()">
          确定
        </el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import store from '../store'
import {getToken} from "@/utils/auth";
export default {

  data() {
    return {
      activeIndex: '/',
      reservedTicketDialogVisible: false,
      dialogVisible: false,
      deleteDialogVisible: false,
      tableData:[], //所有预定的机票
      rebookTable:[], //可以改签的机票
      ticket:{},
      userToken: getToken(),
      deleteTicketId: '',
      oldTicketId: '', //更新之前的机票 id
      selectTravelTime: '',
    }
  },
  methods: {
    editTicket(){
      this.reservedTicketDialogVisible = true;
      this.getreservedTickets();
    },

    Edit(data){
      this.dialogVisible = true;
      this.ticket = data;
      this.oldTicketId = data.ticketId;
      console.log("旧机票id",this.oldTicketId)
      //从后端获取可以改签的数据
      this.$http({
        url: `http://localhost:9090/tour-daiyiji/ticket/rebook`,
        method: "get",
        params: ({
          'departure': data.departure,
          'destination': data.destination,
          'travelTime': data.travelTime
        })
      }).then(({data}) => {
        this.rebookTable = data.list;
        console.log(this.rebookTable)
      });
    },

    handleSelectChange(selectedValue) {
      const selectedObject = this.rebookTable.find(item => item.travelTime === selectedValue);
      this.ticket = selectedObject;
      this.selectTravelTime = selectedObject.travelTime
    },

    EditDelete(id){
      this.deleteDialogVisible = true;
      this.deleteTicketId = id;
    },


    // 获取当前用户所有预定的机票
    getreservedTickets() {
      console.log(this.userToken)
      this.$http({
        url: `http://localhost:9090/tour-daiyiji/ticket/ticketsByUserToken/${this.userToken}`,
        method: "get",        
        data: ({
        })
      }).then(({data}) => {
        console.log(data)
        if (data.page != null)
          this.tableData = data.page.list;
      });
    },

    Update(){
      this.$http({
        url: `http://localhost:9090/tour-daiyiji/ticket/update/${this.oldTicketId}?userToken=${getToken()}`,
        method: "post",
        data: this.$http.adornData({
          'ticketId': this.ticket.ticketId,
          'departure': this.ticket.departure,
          'destination': this.ticket.destination,
          'travelTime': this.ticket.travelTime,
          'price': this.ticket.price,
          'taxation': this.ticket.taxation,
          'meals': this.ticket.meals,
          'flight': this.ticket.flight,
        })
      }).then(({data}) => {
        if (data != null && data.code === 0) {
          this.$message.success("更新成功")
          this.dialogVisible = false;

        } else {
          this.$message.error("更新失败")
        }
        this.getreservedTickets();
      });
    },


    Delete(){
      this.deleteDialogVisible = false;
      this.$http({
        url: `http://localhost:9090/tour-daiyiji/ticket/deleteRelation`,
        method: "get",
        params: ({
          'ticketId': this.deleteTicketId,
          'userToken': this.userToken
        })
      }).then(({data}) => {
          if (data.code === 0) {
            this.$message.success("删除成功")
            // 防止数据遗留
            this.tableData = []
            this.getreservedTickets();
          } else {
            this.$message.error("删除失败")
          }
      });
    },

    logout(){
      this.$store.dispatch('logout', this.userToken)
    }
  },
  watch: {
    dialogVisible(newVal) {
      if (!newVal) {
        this.selectTravelTime = '';
      }
    }
  }

}
</script>

<style>
input[readonly]{
  background-color: #f5f5f5;
  color: #999999;
}

.custom-select .el-input__inner {
  background-color: white;
  width: 410px;
}
</style>
