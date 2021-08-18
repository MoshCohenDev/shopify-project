<template>
  <q-page padding>
<div>
    <q-card class="auth-tabs">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="Login"/>
        <q-tab name="register" label="Register"/>
      </q-tabs>

      <q-separator/>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <RegisterLogin :tab="tab"/>
        </q-tab-panel>
        <q-tab-panel name="register">
          <RegisterLogin :tab="tab"/>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
    <div class="google">
      <p class=" title">:הכנס באמצעות</p>
      <google-provider/>
    </div>
    <div class="q-ma-sm text-center">
      <q-btn class="text-weight-bold btn" flat @click="forgotPassword">
        <a class="password" href="">forget your password? </a>
      </q-btn>
    </div>
  </div>
  </q-page>
</template>
<script>
import RegisterLogin from "components/auth/Register";
import GoogleProvider from "components/auth/GoogleProvider";

export default {
  name: 'Login',
  data() {
    return {
      tab: "register",
    };
  },
  components: {GoogleProvider, RegisterLogin},
  methods: {
    forgotPassword() {
      this.$router.push('/reset-password')
    },
  }
};
</script>

<style scoped lang="scss">
.auth-tabs {
  max-width: 600px;
  margin: 0 auto;
}
.google{
  margin: 30px;
  padding: 30px;
}
.password {
  color: #111010;
  display: block;
  padding: 32px;
  font-size: 16px;
}
.title{
  text-align: center;
  background: #00050a;
  border: 2px solid;
  color: white;
  padding: 6px;
  border-radius: 20px;
  font-size: medium;
  font-weight: bold;
  max-width: 600px;
  margin: 0 auto;

}
</style>
