"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var port = process.env.PORT || 3080;
var server = http_1.createServer(function (req, res) {
    if (req.url === "/api/sayhello") {
        res.statusCode = 200;
        res.setHeader("Content-type", "text-plain");
        return res.end("Saying hello");
    }
    if (req.url === "/api/users") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify([{ name: "John Doe" }]));
    }
    if (req.url === "/api/send") {
        res.statusCode = 200;
        var data = new Promise(function (resolve, reject) {
            var body = "";
            req.on("data", function (chunk) {
                body += chunk.toString();
            });
            req.on("end", function () {
                resolve(body);
                console.log("body", body);
            });
        });
    }
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("HELLO WORLD");
});
server.listen(port, function () {
    console.log("Server running at port " + port);
});
//# sourceMappingURL=index.js.map