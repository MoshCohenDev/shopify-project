export default {
  setLoggedIn(state, value) {
    state.loggedIn = value
  },
  setUserByLogin(state, value) {
    state.userId = value
  },
  setUserByGoogle(state, value) {
    state.userId = value
  },
  imgUrl(state, value) {
    state.img = value
  }
}
