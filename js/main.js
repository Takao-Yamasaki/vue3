const app = Vue.createApp({
  data: () => ({
    user: {
      firstname: 'Taro',
      lastname: 'Yamada',
      age: 23
    }
  })
})
app.mount('#app')
