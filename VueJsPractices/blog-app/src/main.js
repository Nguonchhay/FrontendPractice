import Vue from 'vue'
import * as firebase from "firebase"
import VueNoty from 'vuejs-noty'

import App from './App.vue'
import router from './router'

import 'vuejs-noty/dist/vuejs-noty.css'

Vue.config.productionTip = false

Vue.use(VueNoty)

Vue.use(firebase)
const configOptions = {
  apiKey: "AIzaSyBXAixT-DwUARhIfHAxx-xPc4tyAlQrQRY",
  authDomain: "vueblogdemo-f9ff7.firebaseapp.com",
  databaseURL: "https://vueblogdemo-f9ff7.firebaseio.com",
  projectId: "vueblogdemo-f9ff7",
  storageBucket: "vueblogdemo-f9ff7.appspot.com",
  messagingSenderId: "900790533488",
  appId: "1:900790533488:web:177da7be0d8613258f63b5",
  measurementId: "G-SCQ562T3VM"
}

firebase.initializeApp(configOptions)
firebase.analytics()

const authData = localStorage.getItem('auth')

new Vue({
  router,
  data: {
    auth: authData ? JSON.parse(authData) : {}
  },
  render: h => h(App),
}).$mount('#app')
