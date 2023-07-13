<template>
  <div>
    <Header v-show="$route.meta.show"></Header>
    <transition :name="transitionName" mode="out-in">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <keep-alive :max="10">
            <component :is="Component"></component>
          </keep-alive>
        </transition> </router-view
    ></transition>

    <Footer v-show="$route.meta.show"></Footer>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,

  },
  computed: {
    transitionName() {
      const { meta } = this.$route
      return meta && meta.transitionName ? meta.transitionName : 'fade'
    },
  },
}
</script>

<style>
body,
ul,
ol,
li,
h2,
h3,
p,
hr,
figure {
  padding: 0;
  margin: 0;
}
body {
  font-family: 'Helvetica Neue', Helvetica, Arial, 'Microsoft Yahei UI',
    'Microsoft YaHei', SimHei, '宋体', simsun, sans-serif;
}
ol,
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}
/* 表示进入过渡开始时的样式状态 */
.fade-enter-from {
  opacity: 0;
}
/* 表示进入过渡结束时的样式状态 */
.fade-enter-to {
  opacity: 1;
}
/* 表示离开过渡开始时的样式状态 */
.fade-leave-from {
  opacity: 1;
}
/* 表示离开过渡结束时的样式状态 */
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter-active {
  transition-delay: 0.5s;
}
</style>
