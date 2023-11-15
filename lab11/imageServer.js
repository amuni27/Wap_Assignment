const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    const filePath = './happy_mood.jpg';
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
})
server.listen(3000)