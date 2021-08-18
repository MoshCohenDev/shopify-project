export default {
  dataOrders(state, data) {
    state.orders = data
  },
  dataLineItems(state, lineItem) {
    lineItem.forEach(line => {
      state.lineItems = line.lineItems
    })
    state.ordersNumber=lineItem[0].orderNumber
  },
  cleanLineItems(state) {
    state.lineItems = []
    state.ordersNumber=''
  }
}
