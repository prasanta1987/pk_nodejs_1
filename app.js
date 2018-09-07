
const http = require('http')
const r = require('./routes')
const PORT = process.env.PORT || 8080;


var server = http.createServer(function(req,res){
	r(req,res);
});

server.listen(PORT, function(){
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server Running on: http://localhost:%s", PORT);
});