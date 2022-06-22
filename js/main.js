// Vue.jsのバージョンをコンソールに出力
console.log(Vue.version)

// Vueインスタンスをappに格納
// app
// vm
// const app = Vue.createApp({
  // optionを記述
  // データオブジェクトを定義
  // data: () => ({
    // message: 'Hello Vue.js3!'
  // })
// })
// マウントする要素は、idがapp
// Vueインスタンスのマウントメソッドを呼び出している
// app.mount('#app')

const app = Vue.createApp({
  data: () => ({
    message: 'Hello Vue.js'
  })
})
app.mount('#app')
