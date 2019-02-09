const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// PULSE 

var CoinMarketCap = require("node-coinmarketcap");
var coinmarketcap = new CoinMarketCap();
coinmarketcap.get("flo", coin => {
console.log(coin); // Prints the price in USD of BTC at the moment.
  });