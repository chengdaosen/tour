<template>
    <div class="mt-3">
      <input
        type="text"
        placeholder="还想去哪儿？在此处输入你的留言吧~~~"
        v-model="input"
      />
      <button @click="sendToMessage" class="bg-red-700 rounded text-light-50">
        提交
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        input: '',
      }
    },
    methods: {
      sendToMessage() {
        this.$emit('submitData', this.input)
        this.input = ''
      },
    },
  }
  </script>
  
  <style>
  input {
    width: 300px;
    height: 24px;
    border-radius: 10px;
    border: 1px solid #0000ee;
    margin: 0 5px;
  }
  </style>
  