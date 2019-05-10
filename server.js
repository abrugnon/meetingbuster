// https://medium.com/@maison.moa/setting-up-an-express-backend-server-for-create-react-app-bc7620b20a61

// dotenv ?

const express = require("express");
const path = require('path');
const btlistener = require('./btlistener')
const api = require('./api')
const app = express();

// port pour le serveur HTTP
const http_port = process.env.PORT || 8000

global.bt_current= {};

//Définition et mise en place du port d'écoute
app.use(express.static(path.join(__dirname, 'client/build')));

/*
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
});
*/

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
app.get('/api/list', api.list_get);
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/public/index.html'));
})
app.listen(http_port, () => console.log(`Listening on port ${http_port}`));

btlistener.scan();


//setInterval(btlistener.scan, 300000);
