const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const app = express()

app.use(bodyParser.json());


const headers = {
  "X-Shopify-Access-Token": "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",
  "Content-Type": "application/json",
};
const pageId = 105751544096;
const metafieldId = 29046030270752;
const shop_domain = "primeira-loja-com-next.myshopify.com";
// const SHOPIFY_ADMIN_ENDPOINT = `https://${shop_domain}/admin/api/2023-04/pages/${pageId}/metafields/${metafieldId}.json`;

// app.post("/shopify/", async (req, res) => {
//   try {
//     const response = await axios.get(SHOPIFY_ADMIN_ENDPOINT, { headers });
//     if (!response.data?.metafield?.value) {
//       res
//         .status(200)  
//         .json({ Message: "Items sold metafield quantity not found" });
//       return;
//     }
//     let bodyObject =
//       typeof req.body === "string" ? JSON.parse(req.body) : req.body;

//     if (!bodyObject.line_items) {
//       res
//         .status(200)
//         .json({ Message: "Body post request with no lineItems in it" });
//       return;
//     }

//     const CURRENT_TOTAL_ITEMS_SOLD = response.data.metafield.value;
//     const { line_items } = bodyObject;

//     const NEW_TOTAL_ITEMS_SOLD = line_items.reduce(
//       (accumulator, currentItem) => accumulator + currentItem.quantity,
//       CURRENT_TOTAL_ITEMS_SOLD
//     );
//     const UPDATED_METAFIELD = {
//       metafield: {
//         id: "29046030270752",
//         value: NEW_TOTAL_ITEMS_SOLD,
//         type: "number_integer",
//       },
//     };

//     const update_metafield_response = await axios.put(
//       SHOPIFY_ADMIN_ENDPOINT,
//       UPDATED_METAFIELD,
//       { headers }
//     );

//     res.status(200).json({
//       item_to_add: NEW_TOTAL_ITEMS_SOLD - CURRENT_TOTAL_ITEMS_SOLD,
//       UPDATED_METAFIELD,
//       response: update_metafield_response.data,
//     });
//   } catch (error) {
//     console.error("Error:", error.message);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });


app.post('/', (req, res)=>{
  console.log('testing vercel')
  console.log('bodyy', req.body)
  res.status(200).json({message: 'it works!'})
})

// const userRouter = require('./routes/users')
// const shopify = require('./routes/shopify-webhook')
// app.use('/shopify', shopify)

app.listen(3001)
