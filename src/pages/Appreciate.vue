<template>
  <div class="mt-15">
    <div id="headline">
      <div class="headline">
        <hgroup>
          <h2 class="animate__animated animate__backInLeft">风景欣赏</h2>
          <p>介绍各种最新旅游信息、资讯要闻、景点攻略等</p>
        </hgroup>
      </div>
    </div>
    <div style="width: 1200px; margin: auto">
      <el-row :gutter="20">
        <el-col :span="16"
          ><div>
            <h2
              style="
                font-size: 45px;
                margin-bottom: 10px;
                color: #666;
                font-weight: normal;
                border-bottom: 1px dashed #ccc;
                padding: 0 0 0 0;
              "
              class="animate__fadeInDownBig animate__delay-2s"
            >
              热门旅游
            </h2>
            <el-row>
              <el-col :span="12" v-for="(item, index) in tour" :key="index">
                <el-card :body-style="{ padding: '0px' }">
                  <img :src="item.img" class="image" @click="goDetail" />
                  <div
                    class="flex justify-center mb-0 text-2xl"
                    style="padding: 20px"
                  >
                    <span style="text-align: center">{{ item.title }}</span>
                    <div class="bottom clearfix"></div>
                  </div>
                </el-card>
              </el-col>
            </el-row></div
        ></el-col>
        <el-col :span="8"
          ><div class="grid-content bg-purple mt-8">
            <Aside>热门路线</Aside>
            <Recom class="mt-5">热门景点</Recom>
          </div></el-col
        >
      </el-row>
    </div>
  </div>
</template>

<script>
import Aside from '@/pages/Aside.vue'
import Recom from './Recom.vue'
export default {
  components: {
    Aside,
    Recom,
  },
  data() {
    return {
      tour: [
        {
          img: '../images/tour1.jpg',
          title: '曼谷-芭提雅6日游[共12张]',
        },
        {
          img: '../images/tour2.jpg',
          title: '马尔代夫双鱼岛[共12张]',
        },
        {
          img: '../images/tour3.jpg',
          title: '海南[共19 张]',
        },
        {
          img: '../images/tour4.jpg',
          title: '富山-大阪-东京[共22张]',
        },
        {
          img: '../images/tour5.jpg',
          title: '法瑞意德[共31张]',
        },
        {
          img: '../images/tour6.jpg',
          title: '巴厘岛[共12张]',
        },

        {
          img: '../images/tour7.jpg',
          title: '塞舌尔迪拜[共7张]',
        },
        {
          img: '../images/tour8.jpg',
          title: '花样姐姐土耳其[共14张]',
        },
      ],
    }
  },
  methods: {
    goDetail() {
      this.$router.replace('/Detail')
    },
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
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.image {
  width: 100%;
  display: block;
  transition: transform 0.3s ease;
}

.image:hover {
  transform: scale(1.2);
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
