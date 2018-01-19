var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname + "/app/src")).listen(8080, function(){
    console.log('Server running on http://localhost:8080/');
});
