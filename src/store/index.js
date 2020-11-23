import Vue from 'vue'
import Vuex from 'vuex'
import { getMenu } from '../api/menu'
import { ADDRESS_MUTATION } from '../utils/mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 菜单数据
    menulist: [],
    // 被选择tab标签的名称
    editableTabsValue: null,
    // 跳转地址
    contentUrl: '',
    editableTabs: []
  },
  mutations: {
    mutationmenu (state, data) {
      console.log('mutation', data)
      state.menulist = data
    },
    [ADDRESS_MUTATION] (state, data) {
      console.log('进入mutationAddress')
      var find = state.editableTabs.find(function (value, index, arr) {
        return value.name === data.name
      })
      if (!find) {
        state.editableTabsValue = data.name
        state.contentUrl = data.url
        state.editableTabs.push({
          title: data.name,
          name: data.name
        })
      } else {
        state.editableTabsValue = data.name
      }
    }
  },
  actions: {
    async getMenuAction (content) {
      content.commit('mutationmenu', await getMenu())
    }
  },
  modules: {
  }
})
