import {firebaseAuth} from "../../middlwere/firebase";
import {LocalStorage, Loading} from "quasar";
import {showErrorMessage} from "src/functions/function-error-message";

export default {

  registerUser({commit}, payload) {
    commit('setUserByLogin', payload.name)
    Loading.show()
    firebaseAuth.createUserWithEmailAndPassword
    (payload.email, payload.password)
      .then(response => {
        console.log('response', response.user.uid)
        this.$router.push('/')
      })
      .catch(error => {
        showErrorMessage(error.message)
      })
  },
  loginUser({}, payload) {
    Loading.show()
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log('response', response.user.uid)
      })
      .catch(error => {
        showErrorMessage(error.message)
      })
  },
  logoutUser() {
    firebaseAuth.signOut()

  },
  handleAuthStateChange({commit, dispatch}) {
    firebaseAuth.onAuthStateChanged(user => {
      Loading.hide()
      if (user) {
        LocalStorage.set('loggedIn', user.uid)
        if (user.displayName === null) {
          dispatch('contracts/uploadPhoto', null, {root: true})
        } else {
          console.log(user)
          console.log('user.photoURL',user.photoURL)
          commit('setUserByGoogle', user.displayName)
          commit('imgUrl',user.photoURL)

        }
        commit('setLoggedIn', true)
        this.$router.push('/').catch(err => {
        })
        //   dispatch('posts/getPosts', null, {root: true})
      } else {
        LocalStorage.set('setLoggedIn', false)
        this.$router.push('/auth').catch(err => {
        })
      }
    })
  }

}
