<template>
    <p class="text-center text-weight-bold q-pa-lg title">Orders Table</p>
    <div class="table q-ma-lg">
      <orders-table/>
  </div>
</template>
<script>
import ordersTable from "components/Home/ordersTable";
import {mapActions, mapState} from "vuex";
import {Loading} from "quasar";

export default {
  components: {ordersTable},
  methods: {
    ...mapActions('orders', ['getData'])
  },
  computed:{
    ...mapState('orders',['orders'])
  },
  created() {
    if (this.orders.length){
    }else
    Loading.show()
    this.getData().then(() => {
      Loading.hide()
    })
  }
}
</script>
<style lang="scss">
.bg-home {
  background: -webkit-linear-gradient(to right, #8e9eab, #eef2f3);

}
.title{
  border: 2px solid;
  border-radius: 30px;
  font-size: 2em;
  margin: 2em;
}
</style>
