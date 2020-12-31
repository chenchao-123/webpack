const express = require('express');

var app = express();
app.listen(9090, ()=>{
    console.log('Server Listening on 9090...');
});

app.use(express.static('./public'));