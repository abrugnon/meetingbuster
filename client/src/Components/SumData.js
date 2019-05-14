import React, { Component } from 'react';

class SumData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "Stats",
      money: 0,
      timespent: 0,
      startedSince: 0,
      people: 0,
      costpersecond: 0,
      displaytimespent: this.ms2hms(0),
      displaymoney: 0
    };
  }
  ts2LocalDate (ts){
    let begin = new Date(ts);
    //console.log ("ZZZ" + begin.toLocaleDateString("default"));
    return begin.toLocaleTimeString("default");
  }
  //
  ms2hms (ts) {
    let totalSeconds = Math.floor(ts / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    //format timestamp to human readable
    return String(hours).padStart(2,0) + "h " +  String(minutes).padStart(2,0)  +"min " + String(seconds).padStart(2,0) + "s";
  }
  // clock update
  clock (){
    this.setState(function (prevState, props) {
      var delta = Date.now() - prevState.lasttimestamp ;
      //console.log ("delta :" + delta)
      return {
        displaytimespent: this.ms2hms(this.state.timespent + ( delta * prevState.people )),
        displaymoney: Math.round(prevState.money + (delta/1000 * prevState.people * prevState.costpersecond ))
      };
    });

  }
  // avoid counter going back between API fetch and first update with clock()
  antipullback(res){
    return new Promise ((function(resolve, reject) {
      //
      var delta = Date.now() - res.lasttimestamp ;
      res.time_spent +=  ( delta * res.people );
      res.money +=  (delta/1000 * res.people * res.costpersecond );

      resolve(res);
    }));
  }
  callAPI() {

    fetch("/api/info")
        .then(res => res.json())
        .then(res => this.antipullback(res))
        .then(res => this.setState({
            //displaytimespent: this.ms2hms(res.time_spent),
            timespent: res.time_spent,
            money: Math.round(res.money ),
            displaymoney: Math.round(res.money ),
            people: res.people,
            currency : res.currency,
            room_id: res.room_id,
            costpersecond : res.costpersecond,
            lasttimestamp : res.lasttimestamp ,
            startedSince: this.ts2LocalDate(res.startTs)
          }))

        .catch(err => err);
  }
  componentWillMount() {
    this.callAPI();

  }
  componentDidMount() {
    this.interval = setInterval(() => this.callAPI(), 10 * 1000);
    this.Clockinterval = setInterval(() => this.clock(), 2 * 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.Clockinterval);
  }
  render() {
    //console.log (this.state);
    return (
      <div className="DisplayBlock">
        <h1> {this.state.room_id}</h1>
        <p className="clock">
        {this.state.displaymoney} {this.state.currency}
        </p>
        <p className="clock">
        {this.state.displaytimespent}
        </p>
        <p className="info">
        Attendees : {this.state.people}
        </p>
        <p className="info">
        Started Since<br/>
        {this.state.startedSince}
        </p>
     </div>
    );

  }
}
export default SumData;
