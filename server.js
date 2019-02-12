var express = require('express');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 8008;
app.listen(port);
console.log('server started '+ port);