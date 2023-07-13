<template>
    <div class="demo-fit" style="margin-top: 15px">
      <el-button class="el-icon-s-home" type="primary" @click="$router.push('/')"
        >回到首页</el-button
      >
      <div class="block">
        <el-avatar shape="square" :size="80" :fit="fit" :src="url"></el-avatar>
        <span class="title">{{ fit }}</span>
      </div>
      <br /><br /><br /><br />
      <div class="intro">
        <h2>1. 景福宫</h2>
        <button class="but" @click="showText1 = !showText1">显示图片</button>
        <p>
          <img
            class="img1"
            src="../assets/1.webp"
            alt=""
            :class="{ show: showText1 }"
          />
        </p>
        <span>
          你可能会惊讶于首尔不仅有一座宫殿，还有五座主要宫殿。景福宫是其中规模最大、最重要的一个。可以与北京紫禁城相比，景福宫是一个大型的宫殿建筑群，也是韩国国家民俗博物馆的所在地。如果你想穿传统的韩服，你可以在城里租一套，穿上韩服你可以免费入场！
        </span>
      </div>
  
      <div class="intro">
        <h2>2.光化门广场</h2>
        <button class="but" @click="showText2 = !showText2">显示图片</button>
        <p>
          <img
            class="img1"
            src="../assets/2.webp"
            alt=""
            :class="{ show: showText2 }"
          />
          <img
            class="img1"
            src="../assets/3.webp"
            alt=""
            :class="{ show: showText2 }"
          />
        </p>
        <span>
          这个著名的广场位于光华门前，光华门是景福宫的正门。广场上摆放着韩语字母表的发明者世宗大帝的大型雕像，以及他的一些其他发明的雕像。
        </span>
      </div>
  
      <div class="intro">
        <h2>3.昌德宫</h2>
        <button class="but" @click="showText3 = !showText3">显示图片</button>
        <p>
          <img
            class="img1"
            src="../assets/4.webp"
            alt=""
            :class="{ show: showText3 }"
          />
          <img
            class="img1"
            src="../assets/5.webp"
            alt=""
            :class="{ show: showText3 }"
          />
        </p>
        <span>
          首尔的第二大宫殿是昌德宫。这座宫殿特别受欢迎，因为它有一个巨大的“秘密花园”，有无数的寺庙，亭台和异国情调的动植物。昌德宫在春天特别受欢迎，有许多樱花，秋天则有五颜六色的叶子。
        </span>
      </div>
  
      <div class="intro">
        <h2>4.Bukcheon Hanok村</h2>
        <button class="but" @click="showText4 = !showText4">显示图片</button>
        <p>
          <img
            class="img1"
            src="../assets/6.webp"
            alt=""
            :class="{ show: showText4 }"
          />
        </p>
        <span>
          景福宫和昌德宫之间是一个风景如画的村庄，拥有400多座韩国传统房屋，名为韩屋（hanok）。村庄设有小咖啡馆，餐馆和商店，提供手工制作的工艺品和纪念品。您还可以在该地区找到几家传统的茶馆。
        </span>
      </div>
  
      <div class="intro">
        <h2>5.清溪川</h2>
        <button class="but" @click="showText5 = !showText5">显示图片</button>
        <p>
          <img
            class="img1"
            src="../assets/7.webp"
            alt=""
            :class="{ show: showText5 }"
          />
        </p>
        <span>
          这条位于市中心的10公里长的河流是一个户外展览和节日举办区。特别是在圣诞节和佛陀的生日和元宵节等这样的节日里，小溪上装饰着灯光和艺术品。
        </span>
      </div>
  
      <div class="intro">
        <h2>6.N首尔塔</h2>
        <button class="but" @click="showText6 = !showText6">显示图片</button>
        <p>
          <img
            class="img1"
            src="../assets/8.webp"
            alt=""
            :class="{ show: showText6 }"
          />
        </p>
        <span>
          N首尔塔位于南山，是首尔第二高峰，总高度236米。白天和晚上都可以从塔上欣赏到令人叹为观止的美景。情侣们也喜欢把爱情锁在塔上，以表示他们之间的关系是长久的。
        </span>
      </div>
  
      <div class="intro">
        <h2>7.南大门市场</h2>
        <button class="but" @click="showText7 = !showText7">显示图片</button>
        <p>
          <img
            class="img1"
            src="../assets/9.webp"
            alt=""
            :class="{ show: showText7 }"
          />
        </p>
        <span>
          南大门市场是韩国最大的传统市场，是购买廉价商品以及新鲜的当地水果和蔬菜的地方。这也是一个很受欢迎的地方，你可以尝试韩国的小吃文化。市场从晚上11点到凌晨4点通宵营业，几乎总是人满为患。。
        </span>
      </div>
  
      <div class="intro">
        <h2>8.明洞</h2>
        <button class="but" @click="showText8 = !showText8">显示图片</button>
        <p>
          <img
            class="img1"
            src="../assets/10.webp"
            alt=""
            :class="{ show: showText8 }"
          />
        </p>
        <span>
          如果您想要将时尚的韩国时装和护肤品带回家，首尔繁华的明洞购物区绝对是必须去的。明洞也是寻找古怪主题咖啡馆的地方，如Hello
          Kitty咖啡厅或各种猫狗咖啡馆。
        </span>
      </div>
  
      <div class="intro">
        <h2>9.乐天世界</h2>
        <button class="but" @click="showText9 = !showText9">显示图片</button>
        <p>
          <img
            class="img1"
            src="../assets/11.webp"
            alt=""
            :class="{ show: showText9 }"
          />
        </p>
        <span>
          乐天世界是首尔最大的娱乐中心，拥有世界上最大的室内主题公园，以及一个名为“魔幻岛”的室外游乐园，这是一个由单轨铁路和购物中心连接起来的人工岛。乐天世界还有豪华酒店，韩国民俗博物馆，体育设施和电影院。如果您正在寻找一流的娱乐设施，那么这里就是您的理想选择。
        </span>
      </div>
      <br /><br /><br />
    </div>
  </template>
  
  <script>
  export default {
    name: 'SeoulSights',
    data() {
      return {
        fit: '张三介绍：',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        showText1: false,
        showText2: false,
        showText3: false,
        showText4: false,
        showText5: false,
        showText6: false,
        showText7: false,
        showText8: false,
        showText9: false,
      }
    },
    methods: {},
  }
  </script>
  
  <style>
  * {
    width: 900px;
  }
  .demo-fit {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .title {
    margin-left: 15px;
    font-family: 'Roboto';
    text-align: center;
    text-transform: uppercase;
    color: #000;
    user-select: none;
  }
  .block {
    float: left;
  }
  .img1 {
    transition: width 1s ease-out, height 1s ease-out, opacity 1s ease-out;
    width: 0;
    height: 0;
    opacity: 0;
  }
  
  .show {
    width: 50%;
    height: 50%;
    opacity: 1;
  }
  .but {
    background: gray 0.5;
    border-radius: 3px;
    font-family: 'Roboto';
    text-align: center;
    text-transform: uppercase;
    user-select: none;
  }
  </style>
  