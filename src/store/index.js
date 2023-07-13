import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'universal-cookie'
import router from '@/router/index'
const cookies = new Cookies()
// 使用插件
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        token: '',
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            cookies.set('admin-token', token) // 设置Cookie的值。传递的参数token是要存储的Token值
        },
        clearToken(state) {
            state.token = ''
            cookies.remove('admin-token') // 清除 cookies 中的 token
        },
    },
    actions: {
        //登录
        login({ commit }, { username, password, uuid, captcha }) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:9090/tour-daiyiji/sys/login', {
                        username,
                        password,
                        uuid,
                        captcha,
                    })
                    .then((res) => {
                        commit('setToken', res.data.token)
                        resolve(res)
                    })
                    .catch((err) => reject(err))
            })
        },

        //退出
        logout({ commit }, userToken) {
            return new Promise((resolve, reject) => {
                axios
                    .post(`http://localhost:9090/tour-daiyiji/sys/logout?userToken=${userToken}`)
                    .then((res) => {
                        commit('clearToken')
                        router.push('/login')
                        resolve(res)
                    })
                    .catch((err) => reject(err))
            })
        },
    },

})