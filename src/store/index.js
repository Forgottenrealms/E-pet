import Vue from 'vue'
import Vuex from 'vuex'

// import plugins from './plugins'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions/actions'
import plugins from './plugins'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state,
    getters,
    mutations,
    actions,
    plugins
})