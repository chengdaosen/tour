<template>
  <div class="hot" style="cursor: pointer">
    <figure class="relative">
      <div class="images">
        <img src="@/images/tour1.jpg" />
      </div>
      <figcaption>
        <strong class="title"> &lt;曼谷-芭提雅6日游&gt;</strong>
        包团特惠，超丰富景点，升级1晚国五，无自费，更赠送600元/成人自费券
        <div class="info">
          <em class="sat">满意度 77%</em>
          <span class="price">￥ <strong>2864</strong> 起</span>
        </div>
        <div class="type">国内长线</div>
      </figcaption>
    </figure>
  </div>
</template>
<script></script>
<style scoped>
.images {
  width: 345px;
  height: 208px;
  overflow: hidden;
  cursor: pointer;
}
.hot img {
  transition: transform 0.3s ease;
}
.hot img:hover {
  transform: scale(1.2);
}
.info {
  font-size: 0.16rem;
  font-weight: normal;
  margin: 0.2rem 0 0 0;
  letter-spacing: 0.01rem;
}
.title {
  font-weight: normal;
  color: #333;
  cursor: pointer;
}
.sat {
  font-weight: normal;
  float: right;
  font-style: normal;
  margin: 6px;
  color: #999;
  font-size: 13px;
}
.price {
  color: #f60;
  font-size: 20px;
}
.type {
  position: absolute;
  left: 50cpx;
  top: 4px;
  width: 80px;
  height: 20px;
  background: #59b200;
  line-height: 20px;
  text-align: center;
  font-size: 14px;
  color: #fff;
}
</style>
