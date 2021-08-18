<template>
  <div class="bg">
    <router-view/>
  </div>
</template>
<script>
import {mapActions} from "vuex";
export default {
  name: 'App',
  methods: {
    ...mapActions('auth', ['handleAuthStateChange']),
  },
  mounted() {
    this.handleAuthStateChange()
  }
}
</script>
<style lang="scss">
.bg {
  background: linear-gradient(to right, #b1c9db, #f3faff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>
