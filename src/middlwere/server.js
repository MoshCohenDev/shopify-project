const express = require('express')
const app = express()
const port = 3007
const cors = require('cors')
const axios = require('axios')
app.use(express.json())
app.use(cors())
app.get('/api/orders', async (req, res) => {
  try {
    const request = await
      axios.get('https://yael-story.myshopify.com/admin/api/2021-07/orders.json', {
        headers: {
          'X-Shopify-Access-Token': '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'
        }
      })
    const data = await request.data
    res.json(data);
    console.log(data)
    // console.log(data.orders[0].line_items)
  } catch (e) {
    console.log(e)
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
