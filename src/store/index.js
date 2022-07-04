import { createStore } from 'vuex'
import user from './modules/user'
import getters from './getters'
import tagsview from './modules/tagsview'
import permission from './modules/permission'
export default createStore({
  getters,
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    permission,
    tagsview
  }
})
