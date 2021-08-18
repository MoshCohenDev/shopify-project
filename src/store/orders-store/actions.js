import db from '../../middlwere/database'
export default {

  async getData({commit}, order) {
    let obj = {}
    if (order) {
      obj.order = order
      obj.entity = 'line-items'
    } else {
      obj.entity = 'orders'
    }
    try {
      const data = await db.getDataFromDb(obj)
      data[0].fullName ? commit('dataOrders', data) : commit('dataLineItems', data)
    } catch
      (e) {
      console.error(e)
    }
  },
  cleanDataLineItems({commit}){
    commit('cleanLineItems')
  }
}


//add function:
// async addData({commit}) {
//   let url = `${process.env.URL}`
//   let lineItem = ''
//   let test = ''
//   let temp = ''
//   let entity = ''
//   const req = await axios.get(url);
//   temp = req.data.orders
//   lineItem = logic.filterLineItems(temp)
//   debugger
//   lineItem.forEach(o => {
//     test = o.lineItems
//     entity = `line-items/${o.orderNumber}`
//     db.addProductApi(test, entity)
//   })
// }
