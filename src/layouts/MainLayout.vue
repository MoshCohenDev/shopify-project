<template>
  <q-layout>
    <q-header elevated class="header">
      <q-toolbar class="justify-between">
        <q-btn
          icon="person"
          flat
          to="/auth"
          class="text-weight-bold btn"
          outline label="כניסה"/>
        <q-btn
          to="/"
          flat size="lg" icon="home"/>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'MainLayout',
  data() {
    return {}
  },

}
</script>
<style lang="scss">
.header {
  background: linear-gradient(to right, #232526, #414345); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.btn {
  margin: 0 10px;
}
</style>
