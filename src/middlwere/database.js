import {firebaseDb,} from "./firebase"
export default {
  getDataFromDb,
}

async function getDataFromDb(data) {
  const items = []
  const req = await firebaseDb.collection(data.entity).get()
  req.forEach((doc) => {
    if (data.order) {
      if (data.order.orderNumber == doc.id) {
        items.push(doc.data())
      }
    } else {
      items.push(doc.data())
    }
  })
  return items

}

// add function:

// function addProductApi(data) {
//   console.log(data)
//   firebaseDb.doc(`products/${temp}/product/ ${data}`).set(data)
// }
