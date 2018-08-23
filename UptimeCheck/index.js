var http = require('http');

var server = http.createServer(function (req, res) {
    res.end();
}).listen(2500, function () {
    console.log("\x1b[47m\x1b[31m",
        "HTTP server started @ port : 2500",
        "\x1b[0m");
});