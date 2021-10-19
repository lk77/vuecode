import components from './vuecode.vue'

const Vuecode = {
  install(app, options) {
    app.config.globalProperties.$vcoptions = options || {};
    app.component('vuecode', components)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  //window.Vue.use(Vuecode)
}
export default Vuecode
