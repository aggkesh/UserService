const express = require('express')
const app = express()
const port = 8080

const fs = require('fs');

let rawdata = fs.readFileSync('quotes.json');  
let quotes = JSON.parse(rawdata);  

app.get('/quote', (req, res) => res.send(quotes[Math.floor(Math.random() * 300)]))

app.get('/fibo', (req, res) => res.send(""+fibo(req.query.limit)));

app.use(express.static('public'))

app.listen(port, () => console.log(`NAGP-quotes app listening on port ${port}!`))


 function fibo(n) { 
    if (n < 2)
        return 1;
    else   return fibo(n - 2) + fibo(n - 1);
}