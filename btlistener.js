// listener BT
const bluetooth = require('node-bluetooth');

const compute = require('./compute');

let bt_shadow = {};
// Load excluded MAC addresses
let excluded = (process.env.bt_exclude) ? process.env.bt_exclude.split(',') : [];
let next_scan=0;


exports.scan = function (){
  // flush shadow
  const device = new bluetooth.DeviceINQ();

  bt_shadow = {};
  device
    .on('finished', filter)
    .on('found', function found(address, name){
      if (excluded.indexOf(address) == -1 ) {
        bt_shadow[address]= { "name": name };
        //bt_shadow[address] =  name ;
        console.log('Found: ' + address + ' with name ' + name);
      } else {
        console.log('Excluded Device : ' + address);
      }
    }).scan();
}

let filter = function() {
   console.log ("filter scan " + next_scan);

   let current = Object.keys(buster.bt_current);
   let toDelete = current.filter(x => !Object.keys(bt_shadow).includes(x));
   let toAdd = Object.keys(bt_shadow).filter(x => !current.includes(x));
   //console.log (toDelete)
   //console.log (toAdd)

   // replace data on first run to avoid loosing a cycle
   if (next_scan == 0) {
     buster['bt_current'] = bt_shadow ;
   }
   compute.sum (buster);

   buster['bt_current'] = bt_shadow ;
   //console.log (buster) ;
   // launch again later
   next_scan = setTimeout(module.exports.scan, 240 *1000);

}
