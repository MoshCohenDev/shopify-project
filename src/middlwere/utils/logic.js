export default {
  // filterOrderdData(orders) {
  //   let arr = []
  //   let order = {}
  //   for (let item of orders) {
  //     order.orderNumber = item.order_number
  //     order.id = item.id
  //     order.fullName = item.customer.first_name + ' ' + item.customer.last_name
  //     order.orderDate = new Date(item.customer.created_at).toUTCString()
  //     order.totalPrice = item.total_price_usd
  //     order.totalDiscoount = item.current_total_discounts
  //     order.amount = item.line_items.length
  //     arr.push(order)
  //     order = {}
  //   }
  //   return arr
  // },


  // filterLineItems(orders) {
  //   let arr = []
  //   for (let item of orders) {
  //     let order = {}
  //     order.orderNumber = item.order_number
  //     order.lineItems = []
  //     item.line_items.forEach((data) => {
  //       let lineItem = {}
  //       lineItem.id = data.id
  //       lineItem.price = data.price
  //       lineItem.name = data.name
  //       lineItem.quantity = data.quantity
  //       order.lineItems.push(lineItem)
  //     })
  //     arr.push(order)
  //   }
  //   console.log(arr)
  //   return arr
  // },


}
