import React, { Component } from 'react';

class PhoneList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      name: "toto",
      phoneList: [],
    };
  }
  callAPI() {
    fetch("/api/mac")
        .then(res => res.json())
        .then(res => this.setState({ phoneList: res }))
        .catch(err => err);
  }
  componentWillMount() {
    this.callAPI();
  }
  componentDidMount() {
    this.interval = setInterval(() => this.callAPI(), 10 *1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="DisplayBlock">
        <h1>Device List {this.state.name}</h1>
        <ul>
        {Object.keys(this.state.phoneList).map((mac) =>
          <li key={mac}>  {this.state.phoneList[mac].name} ({mac})</li>
        )}
        </ul>
      </div>
    );
  }
}
export default PhoneList;
