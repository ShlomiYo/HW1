
var player = require('./player');
var http = require('http');


var shlomi = player.createPlayer("Shlomi");
var david = player.createPlayer("David");



shlomi.golPlusProto();
shlomi.golPlusProto();
shlomi.golPlusProto();
shlomi.golPlusProto();
shlomi.golMinusProto();
shlomi.golMinusProto();
shlomi.golPlusProto();


var msg = shlomi.displayProto();




console.log("\n\n");


david.golPlusProto();
david.golPlusProto();
david.golMinusProto();
david.golMinusProto();
david.golMinusProto();
david.golPlusProto();

msg += david.displayProto();


console.log("\n\n");





http.createServer(function(req, res){

res.writeHead(200, {"Content-Type": "text/html"});
res.write("<!DOCTYPE html>");
res.write("<html>");
res.write("<head>");
res.write("<title>Shlomi's HomeWork</title>");
res.write("</head>");
res.write("<body>");
res.write("<h1> Shlomi VS David Gols Score</h1><br>");
res.write("<pre>"+msg+"</pre>");
res.write("</body>");
res.write("</html>");
res.end();

}).listen(8080);

console.log('Listening on port 8080,\nPlease type localhost:8080 at the browser to see the results');

