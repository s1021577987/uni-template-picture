import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$serverUrl = 'http://192.168.2.186:8000';
// Vue.http.headers.common['Referer'] = 'http://www.mm131.net/';
console.log({...App})

App.mpType = 'app'
// console.log(App)
const app = new Vue({
    ...App
})

console.log(app)
app.$mount()