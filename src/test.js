

//actions:
// import db from '../../middlwere/database'
// import logic from '../../middlwere/logic'
//
// export default {
//
//   async getOrders({commit}) {
//     let orders = ''
//     let entity = ''
//     try {
//       const req = await db.getData('orders');
//       const data = {}
//       req.forEach(o => {
//         const lineItems = o.line_items
//         lineItems.forEach(async (item) => {
//           data[item.id] = item
//           debugger
//           entity = `line-items/${o.id}`
//           await db.addProductApi(data, entity)
//           debugger
//         })
//       })o
//       orders = await logic.filterOrderdData(req)
//       commit('getAllOrders', orders)
//     } catch
//       (e) {
//       console.error(e)
//     }
//   },
//   async getLineItem({commit}, order) {
//     const item = await db.getItem(order, 'line-items')
//     commit('addLineItem', item)
//   }
// }

//database:

// import {firebaseDb,} from "./firebase"
//
// export default {
//   addProductApi,
//   getData,
// }
//
// async function addProductApi(data, entity) {
//   try {
//     debugger
//     return await firebaseDb.doc(entity).set(data)
//   } catch (err) {
//     console.log(err)
//   }
// }
//
// async function getData(entity) {
//   const list = []
//   const res = await firebaseDb.collection(entity).get()
//   res.forEach((doc) => {
//     list.push(doc.data())
//
//   })
//   return list
// }
//
// async function getItem(item, entity) {
//   const items = []
//   const req = await firebaseDb.collection(entity).get()
//   req.forEach((doc) => {
//     if (item.id === doc.id) {
//       items.push(doc)
//     }
//   })
//   return items
// }







// import axios from "axios";
// import logic from "src/middlwere/logic";
// import db from "src/middlwere/database";
//
// async getDataByDb({commit}) {
//   let url = `${process.env.URL}`
//   let lineItem = ''
//   let temp = ''
//   let entity = ''
//   const req = await axios.get(url);
//   temp = req.data.orders
//   lineItem = logic.filterLineItems(temp)
//   debugger
//   lineItem.forEach(item => {
//     entity = `line-items/${item.orderNumber}`
//     db.addProductApi(item, entity)
//   })
// }
