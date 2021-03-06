import newstockobserver from './NewStockObserver';
import newstocklist from './NewStockList';
import newstockdetail from './NewStockDetail';
// initial state
const state = {
  ...newstocklist.state,
  ...newstockdetail.state,
  ...newstockobserver.state,
  

}

// getters
const getters = {
  ...newstockobserver.getters,
  ...newstocklist.getters,
  ...newstockdetail.getters
}

const actions = {
  ...newstockobserver.actions,
  ...newstocklist.actions,
  ...newstockdetail.actions
}

// mutations
const mutations = {
  ...newstockobserver.mutations,
  ...newstocklist.mutations,
  ...newstockdetail.mutations
}

export default {
  state,
  getters,
  actions,
  mutations
}
