const express = require('express');
const app = express();
const port = 3000

app.get('/' ,(req, res) => {

res.send('i am ok now , server47 is running');

})

app.listen(port, () => {

console.log('port is running ');

})