<template>
  <div>
    <el-row :gutter="12" class="border-light-900 border-1">
      <h1 class="ml-6 mt-4 font-semibold"><slot></slot></h1>
      <div v-for="(item, index) in recom1" :key="index">
        <el-col :span="8" class="mt-2">
          <el-card
            :body-style="{ padding: '0px' }"
            shadow="hover"
            class="text-sm font-semibold h-10 text-center leading-loose"
            >{{ item.tui_jian }}</el-card
          >
        </el-col>
      </div>
    </el-row>

  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      recom1: [],
    }
  },
  mounted() {
    axios.post('/api/users').then((res) => {
      let result = res.data.recom1
      this.recom1 = result
    })
  },
}
</script>
