const express = require('express');
const https = require('https')
const fs = require('fs');

const app = express();

const PORT = 8800;
const HOST = '0.0.0.0';

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}


app.get('/', (req, res) => {
  res.send(
    `
    <h1>Home</h1>
    <p>Docker is amazing!</p>
    <a href="/more" alt="Next Page">Next Page</a>
    `
  )
});

app.get('/more', (req, res) => {
  res.send(
    `
    <h1>Page Two</h1>
    <p>Node.js is pretty great too!!</p>
    <p>But even better with TypeScript...</p>
    <a href="/" alt="Back Home">Back Home</a>
    `
  )
});

/* https.createServer(options, app).listen(PORT, HOST, () => {
  console.log(`Running on https://${HOST}:${PORT}`);
}); */
app.listen(PORT, HOST, () => {
  console.log(`Running on https://${HOST}:${PORT}`);
});