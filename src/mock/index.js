import Mock from 'mockjs'
let data = Mock.mock({
  recom: [
    {
      title: '曼谷-芭提雅6日游',
      intro: '包团特惠，超丰富景点，升级1 晚国五，无自费，赠送600元成人券...',
      pic1: '￥2864',
      pic2: '¥3980',
      type: '国内长线',
      discount: '4.7折',
      img: '../images/tour1.jpg',
    },
    {
      title: '马尔代夫6日自助游',
      intro: '双鱼岛Olhuveli4晚，上海出发，机+酒 包含:早晚餐+快艇',
      pic1: '¥8039',
      pic2: '¥9980',
      type: '出境长线',
      discount: '7.7折',
      img: '../images/tour2.jpg',
    },
    {
      title: '海南双飞5日游',
      intro: '含盐城接送，全程挂牌四星酒店，一价全含，零自费“自费项目”免费送',
      pic1: '¥2709',
      pic2: '¥3280',
      type: '自助旅游',
      discount: '6.5折',
      img: '../images/tour3.jpg',
    },
    {
      title: '富山-大阪-东京8日游',
      intro: '暑期亲子，2天自由，无导游安排自费项目，全程不强迫购物',
      pic1: '¥9499',
      pic2: '¥9999',
      type: '自助旅游',
      discount: '8.8折',
      img: '../images/tour4.jpg',
    },
    {
      title: '法瑞意德12日游',
      intro: '4至5星，金色列车，少女峰，部分THE MALL',
      pic1: '¥9199',
      pic2: '¥9999',
      type: '国内短线',
      discount: '9.2折',
      img: '../images/tour5.jpg',
    },
    {
      title: '巴厘岛6日半自助游',
      intro: '蓝梦出海，独栋别墅，悦榕庄下午茶，纯玩',
      pic1: '¥6488',
      pic2: '¥8460',
      type: '国内短线',
      discount: '7.6折',
      img: '../images/tour6.jpg',
    },
    {
      title: '塞舌尔迪拜9日自助游',
      intro: '一游两国，4晚塞舌尔，2晚迪拜，香港EK往返',
      pic1: '¥9669',
      pic2: '¥9999',
      type: '游轮观光',
      discount: '9.6折',
      img: '../images/tour7.jpg',
    },
    {
      title: '花样姐姐土耳其9日游',
      intro: '最高立减3000！中餐六菜一汤+土耳其当地美食满足您挑剔味蕾',
      pic1: '¥9999',
      pic2: '¥9999',
      type: '出境长线',
      discount: '10折',
      img: '../images/tour8.jpg',
    },
    {
      title: '大阪-京都-箱根双飞6日游',
      intro: '盐城直飞，不走回头路，境外无自费，超值之旅',
      pic1: '¥5284',
      pic2: '¥8437',
      type: '国内短线',
      discount: '6.8折',
      img: '/images/tour9.jpg',
    },
  ],
  recom1: [
    {
      tui_jian: '曼谷(12)',
    },
    {
      tui_jian: '东京(5)',
    },
    {
      tui_jian: '西双版纳(8)',
    },
    {
      tui_jian: '漓江(16)',
    },
    {
      tui_jian: '呼伦贝尔(4)',
    },
    {
      tui_jian: '首尔(9)',
    },
    {
      tui_jian: '巴厘岛(15)',
    },
    {
      tui_jian: '土耳其(22)',
    },
    {
      tui_jian: '夏威夷(5)',
    },
    {
      tui_jian: '巴黎（11）',
    },
    {
      tui_jian: '毛里求斯(7）',
    },
    {
      tui_jian: '吉普岛（4）',
    },
    {
      tui_jian: '希腊（18）',
    },
    {
      tui_jian: '法瑞意（8）',
    },
    {
      tui_jian: '马尔代夫（9）',
    },
    {
      tui_jian: '新西兰（16）',
    },
    {
      tui_jian: '埃及（11）',
    },
    {
      tui_jian: '迪拜（14）',
    },
    {
      tui_jian: '斯里兰卡(7)',
    },
    {
      tui_jian: '麦哈顿（3）',
    },
    {
      tui_jian: '大版（15）',
    },
  ],
  aside: [
    {
      title: '曼谷-芭提雅6日游',
      img: '../images/tour1.jpg',
    },
    {
      title: '马尔代夫双鱼6日游',
      img: '../images/tour2.jpg',
    },
    {
      title: '海南双飞5日游',
      img: '../images/tour3.jpg',
    },
    {
      title: '富山大阪东京8日游',
      img: '../images/tour4.jpg',
    },
  ],
})
Mock.mock('/api/users', 'post', () => {
  //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
  return data
})
