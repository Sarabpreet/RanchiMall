const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// PULSE 
var CronJob = require('cron').CronJob;
var CoinMarketCap = require("node-coinmarketcap");
var coinmarketcap = new CoinMarketCap();
// FIREBASECRED
var admin = require('firebase-admin');
var serviceAccount = require('./secret/key.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ranchimall.firebaseio.com'
});

var db = admin.database();
var ref = db.ref("flo");
// var usersRef = ref.child("flo");


coinmarketcap.get("flo", coin => {
  // console.log(coin); // Prints the price in USD of BTC at the moment.
  ref.set(coin);
});


// 


// EVERY SECOND 
new CronJob('* * * * * *', function() {
  // console.log('You will see this message every second');
  
}, null, true, 'America/Los_Angeles');

