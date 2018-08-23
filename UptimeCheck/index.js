var http = require('http');
var url = require('url');
var stringDecoder = require('string_decoder').StringDecoder;

http.createServer(function (req, res) {

    var path = url.parse(req.url).pathname;
    var query = url.parse(req.url,true).query;
    var method = req.method;
    var headers = req.headers;
    
    var dataStream;
    var decoder = new stringDecoder('utf-8');

    req.on('data',function(data){
        dataStream += decoder.write(data);
    });
    req.on('end',function(){
        
        dataStream += decoder.end();

        var inData = {
            "path":path,
            "query":query,
            "method":method,
            "headers":headers,
            "payload": dataStream
        };

        console.log(inData);

        res.setHeader('Content-Type',"application/json");
        res.writeHead(200);
        res.end(JSON.stringify({"SUCCESS":"SERVER WORKING"}));
    });

}).listen(2500, function () {
    console.log("\x1b[47m\x1b[31m",
        "HTTP server started @ port : 2500",
        "\x1b[0m");
});