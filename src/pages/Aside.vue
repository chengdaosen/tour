<template>
  <div>
    <h1
      class="text-center"
      style="
        font-size: 20px;
        font-weight: normal;
        letter-spacing: 1px;
        height: 48px;
        line-height: 48px;
        background: #fafafa;
        text-align: left;
        text-indent: 20px;
        margin-bottom: 5px;
      "
    >
      <slot></slot>
    </h1>
    <el-row>
      <el-col :span="12" v-for="(item, index) in aside" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.img" class="image" />
          <div style="padding: 14px">
            <span>{{ item.title }}</span>
            <div class="bottom clearfix"></div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}
</style>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      aside: [],
    }
  },
  mounted() {
    axios.post('/api/users').then((res) => {
      let result = res.data.aside
      this.aside = result
    })
  },
}
</script>
