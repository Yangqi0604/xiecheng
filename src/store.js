import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//types类型  //显示类型
const types = {
  SET_CARTINFO: "SET_CARTINFO"
};

//state状态
const state = {
  cartInfo: {}
};

//getters
const getters = {
  cartInfo: state => state.cartInfo
};

//mutation
const mutations = {
  [types.SET_CARTINFO](state, cartInfo) {
    if (cartInfo) {
      state.cartInfo = cartInfo;
    } else {
      state.cartInfo = null;
    }
  }
};

//action
const actions = {
  setcartInfo: ({
    commit
  }, cartInfo) => {
    commit(types.SET_CARTINFO, cartInfo);
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});