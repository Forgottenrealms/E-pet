import Vue from 'vue'
import Vuex from 'vuex'

// import plugins from './plugins'
import state from './state'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state,
    getters,
    mutations
})