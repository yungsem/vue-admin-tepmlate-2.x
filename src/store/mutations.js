import * as types from './mutation-types'

const mutations = {
  [types.SET_MENU_OPEN] (state) {
    state.menuOpen = !state.menuOpen
  }
}

export default mutations
