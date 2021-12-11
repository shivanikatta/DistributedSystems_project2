import React, { Component } from "react";

class Topic extends Component {
  state = {
    isSubtopic: null,
  };

  componentDidMount() {}

  render() {
    console.log("properties passed to topic page", this.props);

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.onClick(this.props.value)}
          className="btn btn-secondary btn-sm"
        >
          {this.isSubscribe()}{" "}
        </button>{" "}
        <span>{this.props.value}</span>{" "}
        <textarea
          style={this.props.issubscribed == "true" ? {} : { display: "none" }}
          name="body"
          value={this.props.message}
        />
        <p> </p>
      </React.Fragment>
    );
  }

  isSubscribe() {
    //console.log("comparison",this.state.sub_val);
    if (this.props.issubscribed == "true") {
      return "UnSubscribe to ";
    } else {
      return "Subscribe to ";
    }
  }

  //   SubscriptionButton = (topic) => {
  // var xhttp = new XMLHttpRequest();
  // xhttp.open("POST", "http://localhost:8090/v1/subscribe",false);
  // xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  // var subunsub = this.props.issubscribed === "true" ? "false" : "true";
  // this.setState({ isSubtopic: this.props.issubscribed });
  // var path;
  // if (subunsub === "true") {
  //   path = "subscribe";
  // } else {
  //   path = "unsubscribe";
  // }

  // var xhttp = new XMLHttpRequest();
  // xhttp.open("POST", "http://localhost:8090/v1/" + path, false);
  // xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  // var input = JSON.stringify({
  //   subscriberId: this.props.subid,
  //   topicName: this.props.value,
  // });

  // var output;
  // output = xhttp.send(input);
  //this.setState({ sub_val: subunsub})
  // console.log("in button click");
  //console.log(topic)
  //console.log(this.state.count);
  //console.log(input);
  //   };
}

export default Topic;
