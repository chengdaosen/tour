<template>
  <div
    style="
      width: 1200px;
      margin: auto;
      background-color: #fff;
      margin-top: 80px;
    "
  >
    <!-- 头部 -->
    <div id="headline">
      <div class="headline">
        <hgroup>
          <h2 class="animate__animated animate__lightSpeedInLeft">关于我们</h2>
          <p class="animate__animated animate__lightSpeedInLeft">
            介绍各种最新旅游信息、资讯要闻、景点攻略等
          </p>
        </hgroup>
      </div>
    </div>
    <div style="width: 1000px; margin: auto" class="pt-10">
      <h1 class="text-4xl text-gray-500">大锦江有限公司</h1>
      <p style="text-indent: 2em; color: #666; padding-top: 10px">
        锦江旅行社旅游网创立于2006 年10
        月，以“让旅游更简单”为使命，为消费者提供由北京、上海、广州、深圳等64
        个城市出发的旅游产品预订服务，产品全面，价格透明，全年365 天24 小时400
        电话预订，并提供丰富的后续服务和保障。 目前，雪花旅行社旅游网提供8
        万余种旅游产品供消费者选择，涵盖跟团、自助、自驾、邮轮、酒店、签证、景区门票以及公司旅游等，已成功服务累计超过400
        万人次出游。
        同时基于锦江旅行社旅游网全球中文景点目录以及中文旅游社区，可以更好地帮助游客了解目的地信息，妥善制定好出游计划，并方便地预订旅程中的服务项目。
      </p>
      <h1 class="text-4xl text-gray-500 pt-8">联系方式</h1>
      <ul style="color: #666; padding-top: 10px">
        <li>锦江旅行社股份有限公司</li>
        <li>地址：四川省眉山市彭山区锦江大道一号锦江学院</li>
        <li>邮编：1234567</li>
        <li>电话：010-88888888</li>
        <li>传真：010-88666666</li>
      </ul>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
body {
  background-color: #f5f5f5;
}
#headline {
  height: 450px;
  width: 100%;
  min-width: 1200px;
  background: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0)
    ),
    url(@/images/about.jpg) no-repeat center;
  background-size: 100% 100%;
}
.headline {
  width: 1200px;
  height: 450px;
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
h1 {
  padding-bottom: 20px;
  border-bottom: 1px dashed #ccc;
}
</style>
