import state from './state'
import getters from "src/store/orders-store/getters";
import mutations from "src/store/orders-store/mutations";
import actions from "src/store/orders-store/actions";

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
