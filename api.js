var api = {}

api.list_get = function (req,res, current){
      res.send(Object.keys(bt_current));
      res.end();
}

module.exports = api
