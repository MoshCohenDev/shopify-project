<template>
  <q-page>
    <q-table
      class="q-pa-md text-weight-bold"
      v-if="lineItems.length"
      :rows="lineItems"
      :title="`Order Number: ${ordersNumber}`"
      :columns="columns"
      row-key="name">
    </q-table>
  </q-page>
</template>
<script>
const columns = [
  {
    name: 'name',
    required: true,
    label: 'ID',
    align: 'left',
    field: row => row.id,
    sortable: true
  },
  {name: 'Title', align: 'center', label: 'Title', field: row => row.name, sortable: true},
  {name: 'Price', align: 'center', label: 'Price', field: row => row.price, sortable: true},
  {name: 'Quantity', align: 'center', label: 'Quantity', field: row => row.quantity, sortable: true},
]
import {mapActions, mapState} from "vuex";

export default {
  name: "line-items",
  data() {
    return {
      columns,
    }
  },
  computed: {
    ...mapState('orders', ['lineItems', 'ordersNumber'])
  },

}
</script>

<style scoped lang="sass">


</style>
