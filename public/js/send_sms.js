var plivo = require('plivo');

var p = plivo.RestAPI({
  authId: 'MAODA1ODVIMZHHZGE2NZ',
  authToken: 'NzE2MmRiNjk4NjcyYWI3MjVmNWFkZGY2OTRjNTM3'
});

var call = function(){


var obj = {};
obj = getLast();
console.log(obj);

var params = {
    'src': '919650517916', // Sender's phone number with country code
    'dst' : '9650517916', // Receiver's phone Number with country code
    'text' : "Hi, message from Plivo", // Your SMS Text Message - English
    'url' : "http://localhost/response/", // The URL to which with the status of the message is sent
    'method' : "GET" // The method used to call the url
};

// Prints the complete response
p.send_message(params, function (status, response) {
    console.log('Status: ', status);
    console.log('API Response:\n', response);
});
};