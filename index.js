const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/client.html')
});

app.listen(port, (req, res) => {
  console.log(`app running in port: ${port}`);
});
