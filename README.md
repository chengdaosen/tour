# tour

这是一个用 vue2 做的关于旅游网站期末大作业，前后端协同开发，后台使用 Java，实现登录时的验证和图形验证码、机票查询和分类、机票管理等功能，利用 vue 实现了组件传值、插槽、列表渲染、条件渲染、路由守卫、vuex 等功能。下载后无需安装依赖，需要启动后台才可以看到完整功能。

# 登录，判断有无 token 实现路由守卫

```
// 路由前置守卫
router.beforeEach(async (to, from, next) => {
  try {
    const token = getToken()
    console.log(token)
    if (!token && to.path !== '/login') {
      // 用户未登录且目标路由不是登录页
      next('/login')
    } else if (token && to.path === '/login') {
      // 用户已登录且目标路由是登录页
      next('/')
    } else {
      // 其他情况
      next()
    }
  } catch (error) {
    console.error(error)
    next('/login') // 异常情况下重定向到登录页
  }
})
```

![image](https://github.com/chengdaosen/tour/blob/main/readme-img/Snipaste_2023-07-13_12-06-50.png)

# 首页/订票/咨询

![image](https://github.com/chengdaosen/tour/blob/main/readme-img/Snipaste_2023-07-13_12-05-26.png)
![image](https://github.com/chengdaosen/tour/blob/main/readme-img/Snipaste_2023-07-13_12-04-00.png)
![image](https://github.com/chengdaosen/tour/blob/main/readme-img/Snipaste_2023-07-13_12-04-35.png)
