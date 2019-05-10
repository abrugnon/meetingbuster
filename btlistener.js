// listener BT
const bluetooth = require('node-bluetooth');

//let bt_current= {};
let bt_shadow = {};

let next_scan=0;
const device = new bluetooth.DeviceINQ();

exports.scan = function (){
  // flush shadow
  bt_shadow = {};
  device
    .on('finished', filter)
    .on('found', function found(address, name){
      push_phone (address, name);
      console.log('Found: ' + address + ' with name ' + name);
    }).scan();
}

let filter = function() {
   console.log ("filter scan " + next_scan);

   let current = Object.keys(bt_current);
   let toDelete = current.filter(x => !Object.keys(bt_shadow).includes(x));
   let toAdd = Object.keys(bt_shadow).filter(x => !current.includes(x));
   console.log (toDelete)
   console.log (toAdd)
   console.log (bt_current)
   // launch again later
   bt_current= bt_shadow ;
   next_scan = setTimeout(module.exports.scan, 240 *1000);

}

let push_phone = function (phoneaddr, name){
  bt_shadow[phoneaddr]= { "name": name };
}
