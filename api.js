var api = {}

// return dict of BT MAC adresses + friendly name
api.mac_get = function (req,res){
      res.send(buster.bt_current);
      res.end();
}

api.money_get = function (req,res){
      res.send({
        money : Math.round(buster.money),
        costpersecond: buster.costpersecond,
        people: buster.people
      });
      res.end();
}
api.info_get = function (req,res){
      res.send(buster);
      res.end();
}
api.time_get = function (req,res){
    let totalSeconds = Math.floor(buster.time_spent / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    //console.log ("sec :" + seconds)
    res.send({
        timespent : hours + "h" + minutes +" min " + seconds + " s",
        start:   buster.startTs
    });
    res.end();
}
module.exports = api
