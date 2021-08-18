<template>
  <div class="container">
    <div class="q-pa-md">
      <div class="q-gutter-y-md column" dir="rtl" style="max-width: 300px">
        <h3>שחזור סיסמא</h3>
        <h6>הכנס את כתובת האימייל שלך ולחץ על "שחזר סיסמא"</h6>
        <h6>סיסמתך תשלח לתיבת הדואר האלקטרוני ותועבר אוטומטית לדף הכניסה לצורך התחברות מחדש</h6>
        <q-input filled v-model="userLog.email" label="E-mail" placeholder="example: makeGood@gmail.com"/>
        <q-btn unelevated rounded color="primary" label="שחזר סיסמא" @click="resetUserPassword"/>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import {firebaseAuth} from "src/middlewere/firebase";
export default {
  name: "resetpassword",
  data: () => ({
    userLog: {},
  }),
  methods: {
    resetUserPassword() {
      let self = this
      const auth = firebaseAuth;
      const emailAddress = this.userLog.email;
      auth.sendPasswordResetEmail(emailAddress).then(function () {
        alert('מייל שחזור סיסמא נשלח, נא בדוק את תיבת הדואר האלקטרוני')
        self.$router.push('/')
        // Email sent.
      }).catch(function (error) {
        // An error happened.
      });
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  margin: 100px auto;
  flex-direction: column;
  align-items: center;
  direction: rtl;
  background-color: whitesmoke;
  width: 300px;
  height: 550px;
  border-radius: 20px;
}
</style>
