<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-light-400"><slot></slot></h1>
    <textarea ref="Textarea" rows="8" cols="40"></textarea>
    <send @submitData="updata" />
  </div>
</template>
<script>
import Send from '@/pages/Send'
export default {
  data() {
    return { currentTime: '' }
  },
  created() {
    this.getCurrentTime()
  },
  components: {
    Send,
  },
  methods: {
    getCurrentTime() {
      const date = new Date()
      this.currentTime = date.toLocaleTimeString()
    },
    updata(val) {
      this.$refs.Textarea.innerHTML += this.currentTime + ':' + val + '\n'
    },
  },
}
</script>
<style></style>
