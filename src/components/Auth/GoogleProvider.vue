<template>
  <div class="q-pa-sm row justify-center">
    <q-icon
      class="btn"
      color="red"
      name="fab fa-google"
      size="40px"
      outlined @click="login">
    </q-icon>
  </div>
</template>
<script>
import firebaseInstance from '../../middlwere/firebase'

export default {
  name: "GoogleProvider",
  data() {
    return {
      text: ''
    }
  },

  methods: {
    login() {
      var provider = new firebaseInstance.firebase.auth.GoogleAuthProvider();
      const self = this
      firebaseInstance.firebase.auth().signInWithPopup(provider).then(result => {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user)
        self.$router.push('/home')
        // ...
      }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });

    },

  }
}
</script>

<style scoped>
.btn{
  background: #f7f9fa;
  border-radius: 50%;
  border: 2px solid black;
  width: 50px;
  height: 50px;
  margin: 5px;
}
</style>
