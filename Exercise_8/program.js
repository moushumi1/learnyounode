var http = require('http');
var url = process.argv[2].toString();
var string="";

http.get(url, function(response) {
response.setEncoding('utf8')
response.on('data', function(data){
    string=string+data;
})
response.on('end', function(data){
    console.log(string.length);
    console.log(string);
})
response.on('error', console.error);
}).on('error', console.error);