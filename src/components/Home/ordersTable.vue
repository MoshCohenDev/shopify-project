<template>
  <div class="q-pa-lg">
    <q-table
      style="height: 400px;min-width: 400px;"
      class="my-sticky-dynamic q-pa-md text-weight-bold"
      :rows="orders"
      :columns="columns"
      virtual-scroll
      separator="cell"
      :rows-per-page-options="[0]"
      row-key="id"
      @row-click="onRowClick"
      bordered>
    </q-table>
  </div>
</template>
<script>
import {mapActions, mapState} from "vuex";
import {Loading} from "quasar";
import { date } from 'quasar'
export default {
  name: "ordersTable",
  data() {
    return {
      columns: [
        {name: 'name', required: true, label: 'Order number', align: 'center',
          field: row => row.orderNumber, sortable: true},
        {name: 'full name', align: 'center', label: 'Full Name', field: row => row.fullName, sortable: true},
        {name: 'Order Date', align: 'center', label: 'Order Date', field: row => row.orderDate,
          format:val=>val=date.formatDate(val,'D/MM/YY')},
        {name: 'Total Price', align: 'center', label: 'Total Price', field: row => row.totalPrice,},
        {name: 'Total Price Discount', align: 'center', label: 'Total Price Discount', field: row => row.totalDiscoount,},
        {name: 'Quantity', align: 'center', label: 'Quantity', field: row => row.amount,},
      ],
    }
  },
  computed: {...mapState('orders', ['orders', 'lineItems']),},
  methods: {
    ...mapActions('orders', ['getData']),
    onRowClick(evt, row) {
      Loading.show()
      this.getData(row).then(() => {
        Loading.hide()

      })
      this.$router.push('./line-items')
    },
  }
}
</script>
<style lang="sass">
.my-sticky-dynamic
  height: 410px
  border: 2px solid
  border-radius: 20px
  box-shadow: 2px 2px 2px 2px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    background-color: #fff

  thead tr th
    position: sticky
    z-index: 1

  thead tr:last-child th
    top: 0.25em
    font-size: 1.3em
    color: #041524

  thead tr:first-child th
    top: 0

  .q-table
    color: #368a95
  .table

</style>

