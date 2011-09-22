//bloggen
var http = require('http');
exports.templatehead = "";
exports.cal = "";
exports.templateend = "";
var template = "";
exports.loadTemplate = function(){
	
var options = {
	method: 'GET',
  host: 's3.amazonaws.com',
  port: 80,
  path: '/dailynerd/template.html'
};
var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
 // console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function(data){
  template+=data; 
  });
  res.on('end', splitTemplate);
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
req.write('data\n');
req.write('data\n');
req.end();
};

var splitTemplate = function()
{
	var temp = template.split("<!--%8$*54-->");
	exports.templatehead=temp[0];
	exports.cal = temp[1];
	exports.templateend=temp[2];
};

exports.wrapPost = function(post){
	return templatehead + post + templateend;
};
