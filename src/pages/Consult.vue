  <template>
    <div class="mt-15">
      <!-- 头部 -->
      <div id="headline">
        <div class="headline">
          <hgroup>
            <h2 class="animate__animated animate__backInLeft">旅游资讯</h2>
            <p>介绍各种最新旅游信息、资讯要闻、景点攻略等</p>
          </hgroup>
        </div>
      </div>
      <!-- 内容 -->
      <div style="width: 1200px; margin: 0 auto">
        <el-row :gutter="20" class="mt-10">
          <el-col :span="16">
            <h1
              style="line-height: 35px"
              class="bg-cyan-900 h-8 text-indigo-100 pl-8 font-serif text-xl rounded"
            >
              限时特价
            </h1>
            <div
              class="relative mt-8 border-2 border-gray-500 h-60 overflow-hidden"
              v-for="(item, index) in recom"
              :key="index"
            >
              <div>
                <img class="float-left w-90 h-60" :src="item.img" />
                <div>
                  <h3 class="font-sans text-2xl">{{ item.title }}</h3>
                  <p class="text-sm overflow-ellipsis pt-4">
                    {{ item.intro }}
                  </p>
                  <ol class="mt-6">
                    <li>
                      <mark
                        style="
                          color: #458b00;
                          border: 1px solid #458b00;
                          padding: 0 5px;
                          background: #fff;
                          border-radius: 5px;
                        "
                        >交通</mark
                      >：春秋航空,杭州出发,无需转机
                    </li>
                    <li class="mt-3">
                      <mark
                        style="
                          color: #458b00;
                          border: 1px solid #458b00;
                          padding: 0 5px;
                          background: #fff;
                          border-radius: 5px;
                        "
                        >团期</mark
                      >：11/01、11/03、11/08...
                    </li>
                  </ol>
                  <div>
                    <div
                      style="
                        position: absolute;
                        top: 100px;
                        right: 30px;
                        color: #f60;
                        font-size: 15px;
                      "
                    >
                      ￥<strong style="font-size: 30px">{{ item.pic1 }}</strong>
                      <s style="color: #999; font-size: 19px">{{ item.pic2 }}</s>
                    </div>
                    <div
                      style="
                        position: absolute;
                        right: 38px;
                        top: 144px;
                        height: 50px;
                        width: 120px;
                        text-align: center;
                        line-height: 50px;
                        background: #f60;
                        border-radius: 4px;
                        color: #fff;
                        font-size: large;
                        cursor: pointer;
                      "
                    >
                      立即抢购
                    </div>
                  </div>
                  <div
                    class="absolute left-0 top-0"
                    style="
                      width: 80px;
                      height: 20px;
                      background: #59b200;
                      line-height: 20px;
                      text-align: center;
                      font-size: 14px;
                      color: #fff;
                    "
                  >
                    {{ item.type }}
                  </div>
                  <div>
                    <span
                      class="absolute top-0 right-0 text-stroke-md"
                      style="
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 52px;
                        height: 52px;
                        color: crimson;
                      "
                      >{{ item.discount }}</span
                    >
                  </div>
                  <div class="text-center absolute bottom-2 right-10">
                    本团游由锦江旅行社赞助提供，截止于<time>2023-12-12</time>
                  </div>
                </div>
              </div>
            </div></el-col>
            <el-col :span="8">
          <div class="bg-true-gray-100">
            <recom>景点推荐</recom>
            <div>
              <div class="bg-cool-gray-600 mt-3 rounded">
                <message>留言框</message>
              </div>
              <div class="mt-8"><Aside>热门旅游</Aside></div>
            </div>
          </div>
        </el-col>
        </el-row>
      </div>
    </div>
  </template>
  <script>
  import axios from 'axios'
  import Recom from '@/pages/Recom.vue'
  import Aside from '@/pages/Aside.vue'
  import Message from './Message.vue'

  export default {
    components: {
      Recom,
      Aside,
      Message
    },
    data() {
      return {
        recom: [],
      }
    },
    mounted() {
      axios.post('/api/users').then((res) => {
        let result = res.data.recom
        this.recom = result
      })
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
  </style>
