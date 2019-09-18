var express = require('express');
var app = express();
var path = require('path');
const PORT = 8080

console.log("Starting Server! " + PORT)

app.use('/static', express.static(path.join(__dirname, 'static')))

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    let file = path.join(__dirname, 'static', 'html', 'index.html');
    res.sendFile(file);
    console.log(file);
});

app.listen(PORT);