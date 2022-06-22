const app = Vue.createApp({
  data: () => ({
    now: '-'
  }),
  methods: {
    onClick: function() {
      // console.log('onClick!')
      // データオプションのnowプロパティを指す
      this.now = new Date().toLocaleString()
      // console.log(this)
    }
  }
})
app.mount('#app')
