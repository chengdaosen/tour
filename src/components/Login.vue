<template>
  <el-row type="flex">
    <el-col :lg="16" :md="12" class=" min-h-screen" style="background-color: black">
      <video style="height: 100%" autoplay loop>
        <source src="../video/login.mp4">
      </video>
    </el-col>
    <el-col
        :lg="8"
        :md="12"
        class="bg-light-50 flex flex-col items-center justify-center min-h-screen"
        style="background-color: #f5f5f5"
    >
      <h2 class="font-bold text-3xl text-gray-800">欢迎回来</h2>
      <div class="my-5 text-gray-300 space-x-2;">
        <span>账号密码登录</span>
      </div>
      <!-- 登录表单 -->
      <el-form
          :model="dataForm"
          ref="ruleform"
          :rules="rules"
          class="w-[250px]"

      >
        <el-form-item prop="username">
          <el-input v-model="dataForm.username" placeholder="请输入用户名">
            <template #prefix>
              <i class="el-icon-s-custom"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
              type="password"
              v-model="dataForm.password"
              placeholder="请输入密码"
              show-password
          >
            <template #prefix>
              <i class="el-icon-lock"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="captcha">
          <el-row :gutter="20">
            <el-col :span="14">
              <el-input v-model="dataForm.captcha" placeholder="验证码">
              </el-input>
            </el-col>
            <el-col :span="10" class="login-captcha">
              <img :src="captchaPath" @click="getCaptcha()" alt="" />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button
              round
              color="#626aef"
              class="w-[250px]"
              type="primary"
              @click="submitForm()"
          >登 录
          </el-button>
        </el-form-item>
      </el-form>
    </el-col>
<!--    <transition name="fade">-->
<!--      <div v-show="false"><Destination></Destination></div>-->
<!--    </transition>-->
  </el-row>
</template>

<script>


export default {

  data() {

    return {
      loggedIn: false,
      dataForm: {
        username: '',
        password: '',
        captcha: '',
        uuid: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur',
          },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
        captcha: [
          { required: true, message: '验证码不能为空', trigger: 'blur' },
        ],
      },
      captchaPath: '',
    }
  },

  created() {
    this.getCaptcha()
  },

  methods: {
    submitForm() {
      this.$refs.ruleform.validate((valid) => {
        if (valid) {
          this.$store.dispatch('login', this.dataForm).then((data) => {
            console.log(data)
            if (data.data.code === 0) {
              this.$message.success("登录成功")
              this.loggedIn = true
              this.$router.push('/')
            } else {
              this.$message.error(data.data.msg)
              this.getCaptcha();
              return false;
            }
            
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
//     delay(){
//       setTimeout(function (){
//         this.loggedIn = false
//       },1000)
//
// },

    // 获取验证码
    getCaptcha() {
      this.dataForm.uuid = this.getUUID()
      this.captchaPath = `http://localhost:9090/tour-daiyiji/captcha.jpg?uuid=${this.dataForm.uuid}`
    },

    getUUID() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        return (
            c === 'x' ? (Math.random() * 16) | 0 : 'r&0x3' | '0x8'
        ).toString(16)
      })
    },

    //监听回车事件
    onKeyUp(e) {
      if (e.key === 'Enter') this.submitForm()
    },
  },
  mounted() {
    window.addEventListener('keyup', this.onKeyUp)
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.onKeyUp)
  },

}
</script>
<style scoped>
/*.fade-enter-from {*/
/*  opacity: 0;*/
/*}*/
/*!* 表示进入过渡结束时的样式状态 *!*/
/*.fade-enter-to {*/
/*  opacity: 1;*/
/*}*/
/*!* 表示离开过渡开始时的样式状态 *!*/
/*.fade-leave-from {*/
/*  opacity: 1;*/
/*}*/
/*!* 表示离开过渡结束时的样式状态 *!*/
/*.fade-leave-to {*/
/*  opacity: 0;*/
/*}*/
/*.fade-enter-active,*/
/*.fade-leave-active {*/
/*  transition: all 0.5s;*/
/*}*/
/*.fade-enter-active {*/
/*  transition-delay: 0.5s;*/
/*}*/
</style>