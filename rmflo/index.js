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
  pulse();
}, null, true, 'America/Los_Angeles');

function pulse(){
  var struct={};

  coinmarketcap.get("flo", coin => {
    // GOT COIN MARKET CAPS 
    struct=coin;
    struct.created_at=new Date();
    console.log(struct);
    
    // GET FIREBASES & REMOVE DATE

    // CHECKING IF ONE IS EQUAL TO OTHER 
    // coin2=
    console.log(
      ref.once('val'));

    if(JSON.stringify(coin)===JSON.stringify(coin2)){
      console.log(true);
    }
    else{
      // SET THIS UP ON SERVER
       ref.set(struct);
    }


    // console.log(coin); // Prints the price in USD of BTC at the moment.
   
    
  });

  // coinmarketcap.get("flo").then(function(coin){
  //   struct=coin;
  //   coin.created_at=new Date();
  //   console.log(struct);

  // }).error(function(err){
  //   console.log(err);
  // })


  console.log("i got invoked");
// GET COIN DETAILS 
// GET LAST COIN SAVED DETAILS 
// IS IT SAME?
// IF YES DO NOTHING
// IF NOT APPEND IT IN 

}
// READ MORE ON 
// https://firebase.google.com/docs/reference/admin/node/admin.database.Query#toJSON