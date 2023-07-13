<template>
  <div class="mt-15">
    <div id="headline">
      <div class="headline">
        <hgroup>
          <h2 class="animate__animated animate__backInLeft">机票订购</h2>
          <p>介绍各种最新旅游信息、资讯要闻、景点攻略等</p>
        </hgroup>
      </div>
    </div>
    <div style="width: 1260px; margin: 0 auto">
      <el-row :gutter="20">
        <el-col :span="16">
          <div>
            <article>
              <!-- 机票预订表单 -->
              <form>
                <h2
                    style="
                    color: #666;
                    height: 50px;
                    line-height: 50px;
                    font-size: 40px;
                    font-weight: normal;
                    padding: 5px 0 0px 0;
                    border-bottom: 1px dashed #999;
                    padding-left: 30px;
                  "
                >
                  机票预订
                </h2>
                <div
                    class="flex justify-around items-center"
                    style="height: 160px"
                >
                  <div>
                    <p>
                      <label style="color: #666; font-size: 20px"
                      >出发城市</label
                      >
                      <input
                          v-model="departure"
                          type="text"
                          placeholder="城市名"
                          style="
                          width: 250px;
                          height: 30px;
                          border-radius: 5px;
                          border: 1px solid #ccc;
                          font-size: 18px;
                        "
                      />
                    </p>
                    <p>
                      <label style="color: #666; font-size: 20px"
                      >目的城市</label
                      >
                      <input
                          v-model="destination"
                          type="text"
                          placeholder="城市名"
                          style="
                          width: 250px;
                          height: 30px;
                          border-radius: 5px;
                          border: 1px solid #ccc;
                          font-size: 18px;
                        "
                      />
                    </p>
                  </div>
                  <div>
                    <p>
                      <label style="color: #666; font-size: 20px"
                      >出发时间</label
                      >
                      <input
                          type="text"
                          v-model="travelTime"
                          placeholder="时间/日期"
                          style="
                          width: 250px;
                          height: 30px;
                          border-radius: 5px;
                          border: 1px solid #ccc;
                          font-size: 18px;
                        "
                      />
                    </p>
                    <p>
                      <label style="color: #666; font-size: 20px"
                      >航次航班</label
                      >
                      <input
                          type="text"
                          v-model="flight"
                          placeholder="航班/航次"
                          style="
                          width: 250px;
                          height: 30px;
                          border-radius: 5px;
                          border: 1px solid #ccc;
                          font-size: 18px;
                        "
                      />
                    </p>
                  </div>
                  <div>
                    <button
                        style="
                        height: 90px;
                        width: 90px;
                        background: #f60;
                        border-radius: 5px;
                        color: #fff;
                      "
                        @click="getTickets"
                    >
                      查询
                    </button>
                  </div>
                </div>
              </form>
            </article>
            <div>
              <h2
                  style="
                  color: #666;
                  height: 50px;
                  line-height: 50px;
                  font-size: 40px;
                  font-weight: normal;
                  padding: 5px 0 10px 0;
                  border-bottom: 1px dashed #999;
                  padding-left: 30px;
                "
              >
                最新机票
              </h2>
              <ul  @click="handleClick"
                style="
                  cursor: pointer;

                  width: 820px;
                  margin: 10px 0 10px 0;
                  height: 30px;
                  background-color: #f60;
                  display: flex;
                  padding-left: 10px;
                  align-items: center;
                "
              >
                <li>热门城市：</li>
                <li >北京</li>
                <li >上海</li>
                <li >广州</li>
                <li >深圳</li>
                <li >重庆</li>
                <li>成都</li>
                <li>杭州</li>
                <li>南京</li>
                <li>还原</li>
              </ul>
              <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column label="路线" width="160" align="center">
                  <el-table-column prop="departure" width="50">
                  </el-table-column>
                  <el-table-column prop="destination" width="50">
                  </el-table-column>
                </el-table-column>
                <el-table-column prop="travelTime" label="日期" width="110">
                </el-table-column>
                <el-table-column prop="price" label="价格" width="80">
                </el-table-column>
                <el-table-column prop="taxation" label="税费" width="80">
                </el-table-column>
                <el-table-column prop="meals" label="餐食" width="80">
                </el-table-column>
                <el-table-column prop="flight" label="航班" width="140">
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button
                        size="mini"
                        type="primary"
                        @click="predetermine(scope.row.ticketId)"
                    >预订
                    </el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
              <el-pagination
                  @size-change="sizeChangeHandle"
                  @current-change="currentChangeHandle"
                  :current-page="pageIndex"
                  :page-sizes="[10, 20, 50, 100]"
                  :page-size="pageSize"
                  :total="totalPage"
                  layout="total, sizes, prev, pager, next, jumper">
              </el-pagination>
            </div>
          </div>
        </el-col
        >
        <el-col :span="8"><recom>热门推荐</recom></el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Aside from '@/pages/Aside.vue'
import { getToken } from '@/utils/auth';
import recom from '@/pages/Recom.vue'
export default {
  data() {
    return {
      departure: '',
      travelTime: '',
      destination: '',
      flight: '',
      city: '',
      tableData: [],
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
    }
  },
  created() {
    this.getTickets()
  },


  methods: {

    predetermine(id) {
      this.$http({
        url: `http://localhost:9090/tour-daiyiji/ticket/saveRelation`,
        method: "get",
        params:({
          'ticketId': id,
          'userToken': getToken()
        })
      }).then(({data}) => {
        if (data.code === 0) {
          this.$message.success("预定成功")
        } else {
          this.$message.error("预定失败")
        }
      });
    },
    getTickets() {
      this.$http({
        url: `http://localhost:9090/tour-daiyiji/ticket/list`,
        method: "get",
        params: ({
          'page': this.pageIndex,
          'limit': this.pageSize,
          'departure': this.departure,
          'destination': this.destination,
          'travelTime': this.travelTime,
          'flight': this.flight,
          'city': this.city
        })
      }).then(({data}) => {
        console.log(data)
        this.tableData = data.page.list;
        this.totalPage = data.page.totalCount
      });
    },
    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val
      this.pageIndex = 1
      this.getTickets()
    },
    // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val
      this.getTickets()
    },

    handleClick(event) {
      // 判断点击的元素是否是 li 元素
      if (event.target.tagName === 'LI') {
        if (event.target.textContent == '还原' || event.target.textContent == '热门城市：' ) {
          this.city = '',
          this.getTickets();
        } else {
          this.departure = '';
          this.destination = '';
          this.city = event.target.textContent;
          this.getTickets();
        }
      }
    },
  },
  components: {
    Aside,
    recom
  },
}
</script>
<style scoped>

#headline {
  height: 300px;
  width: 100%;
  min-width: 1263px;
  background: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0)
  ),
  url(@/images/headline.jpg) no-repeat center;
}

.headline {
  width: 1263px;
  height: 300px;
  margin: 0 auto;
}

hgroup {
  padding: 100px 0 0 150px;
}

.headline h2 {
  font-size: 45px;
  color: #eee;
  letter-spacing: 1px;
}

.headline p {
  font-size: 20px;
  color: #eee;
  letter-spacing: 1px;
}

ul li {
  float: left;
  width: 90px;
  height: 20px;
}
ul li:hover{
  color: white;
}
</style>
