<template>
  <div class="mt-15 mb-30">
    <el-carousel
      :interval="1500"
      type="card"
      height="350px"
      style="margin-top: 50px"
    >
      <el-carousel-item v-for="item in img" :key="item">
        <img class="medium" :src="item" />
      </el-carousel-item>
    </el-carousel>
    <div class="mt-10 flex flex-col justify-center items-center">
      <h1
      class="text-5xl font-bold text-gray-400 animate__animated animate__backInDown"
      >
        热门旅游
      </h1>
      <p class="mt-5">
        国内旅游、国外旅游、自助旅游、自驾旅游、油轮签证、主题旅游等各种最新热门旅游推荐
      </p>
      <el-row type="flex" class="row-bg mt-20" justify="space-around">
        <el-col :span="6"
          ><div class="grid-content bg-purple">
            <Hot /></div
        ></el-col>

        <el-col :span="6"
          ><div class="grid-content bg-purple">
            <Hot /></div
        ></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple">
            <Hot /></div
        ></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="6"
          ><div class="grid-content bg-purple">
            <Hot /></div
        ></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple">
            <Hot /></div
        ></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple">
            <Hot /></div
        ></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="6"
          ><div class="grid-content bg-purple"><Hot /></div
        ></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple">
            <Hot /></div
        ></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple">
            <Hot /></div
        ></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="6"
          ><div class="grid-content bg-purple">
            <Hot /></div
        ></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple">
            <Hot /></div
        ></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple">
            <Hot /></div
        ></el-col>
      </el-row>
    </div>
  </div>
</template>
<script>

import Hot from './Hot.vue'
export default {
  data() {
    return {
      img: [
        '/images/tour1.jpg',
        '/images/tour2.jpg',
        '/images/tour3.jpg',
        '/images/tour4.jpg',
        '/images/tour5.jpg',
        '/images/tour6.jpg',
        '/images/tour7.jpg',
        '/images/tour8.jpg',
        '/images/tour9.jpg',
      ],
    }
  },
  components: {
    Hot,
  },

}
</script>
<style scoped>
/* .swiper-container {
  width: 100%;
  height: 500px;
} */
.active {
  width: 30px;
  height: 20px;
  color: black;
}
/* .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
} */
.el-carousel__item img {
  width: 100%;
  height: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
