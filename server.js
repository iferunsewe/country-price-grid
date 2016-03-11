var http = require('http');
var pjson = require('./package.json');


function handleRequest(request, response){
    response.end("It Works!! Path Hit: " + request.url);
}

//Create server
var server = http.createServer(handleRequest);

//Start server
server.listen(function(){
    console.log("Server is listening on port " + pjson.config.port);
});