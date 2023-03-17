const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
// console.log(req.url, req.method, req.headers);
const url = req.url;
const method = req.method;
if (url === '/') {
// do something…
}
if (url === '/messsage' && method === 'POST'){
// do something…
}
// do something…
});
server.listen(3000);