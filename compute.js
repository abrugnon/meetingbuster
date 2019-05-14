// Do your maths

var compute = {}

compute.sum = function (data){
      console.log ("compute");

      ts= Date.now();
      deltams = ts - data.lasttimestamp;
      data.money = data.money + (data.people * data.costpersecond * deltams) / 1000 ;
      data.time_spent = data.time_spent + (deltams * data.people) ;
      // compute new number of people
      data.people = Object.keys(data.bt_current).length;

      data.lasttimestamp = ts;
      console.log (data);
}

module.exports = compute
