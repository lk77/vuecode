import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import Vuecode from './vuecode/index.js'

const store = createStore({
  state: {
    myName:'Change my text from vuenut'
  },
});

const app = createApp({
  render: h => h(App)
});

app.use(store);
app.use(Vuecode, {
    // open:true,
    // theme:'line'
});

app.$mount('#app');




