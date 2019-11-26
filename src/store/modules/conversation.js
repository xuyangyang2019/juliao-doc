// import Vue from 'vue'
// import nedb from '@/db/nedb'

// initial state
const state = {
    currentMember: {} // 当前选中的群成员
}

// getters
const getters = {
    currentMember: state => state.currentMember
}

// actions
const actions = {
    // 设置当前选中群成员
    SetCurrentMember({ commit }, member) {
        commit('SET_CURRENT_MEMBER', member)
    }
}

// mutations
const mutations = {
    SET_CURRENT_MEMBER: (state, member) => {
        state.currentMember = member
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
