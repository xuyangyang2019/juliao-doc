import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

// import nedb from '@/db/nedb'
// import { uploadFile } from '@/api/upload'

// state
const state = {
    tip: 'xyy', // 提示
    ua: 'pc' // userAgent
}

// getters
const getters = {
    tip: state => state.tip,
    ua: state => state.ua
}

// actions
const actions = {
    // 设置提示
    SetTip({ commit }, tip) {
        commit('SET_TIP', tip)
    },
    SetUa({ commit }, ua) {
        commit('SET_UA', ua)
    }
}

// mutations
const mutations = {
    SET_TIP: (state, tip) => {
        state.tip = tip
    },
    SET_UA: (state, ua) => {
        state.ua = ua
    }
}

Vue.use(Vuex)

export default new Vuex.Store({
    modules,
    state,
    getters,
    mutations,
    actions,
    strict: process.env.NODE_ENV !== 'production'
})
