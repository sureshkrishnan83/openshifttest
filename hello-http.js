var http = require ('http');
http.createServer(function (req, res) {
  var now = new Date();
  res.end('Hello From Node.JS!!!!' + now.toJSON() + ' on ' '+ process.env.HOSTNAME + \n' );
}).listen(8000, '0.0.0.0');
console.log ('server running at http://:8000/');
