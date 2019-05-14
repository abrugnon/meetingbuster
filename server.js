// https://medium.com/@maison.moa/setting-up-an-express-backend-server-for-create-react-app-bc7620b20a61

// read config
require('dotenv').config()

const express = require("express");
const path = require('path');
const btlistener = require('./btlistener')
const api = require('./api')
const app = express();

// port pour le serveur HTTP
const http_port = process.env.PORT || 8000
// seconds  in a workday
const secondsaday = 8 * 3600;
//
global.buster = {
    // version
    version : process.env.npm_package_version,
    // ts start
    startTs:  Date.now(),
    // room name
    room_id : process.env.room_id || 'default room',
    currency : process.env.currency || '$',
    // ts last compute
    lasttimestamp: Date.now(),
    // MAC list
    bt_current: {},
    // sum so far
    money: 0,
    // time so far (in milliseconds)
    time_spent: 0,
    // people number
    people: 0,
    // cost for 1 people per second
    //costpersecond: (500 / 8 )/ 3600
    costpersecond: process.env.avg_dailyrate / secondsaday
};

// serve React built files
app.use(express.static(path.join(__dirname, 'client/build')));

// test it !
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
app.get('/api/mac', api.mac_get);
app.get('/api/money', api.money_get);
app.get('/api/time', api.time_get);
app.get('/api/info', api.info_get);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/public/index.html'));
})
//Définition et mise en place du port d'écoute
app.listen(http_port, () => console.log(`Listening on port ${http_port}`));

btlistener.scan();
