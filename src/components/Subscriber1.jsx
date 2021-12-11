import React, { Component } from "react";
import axios from "axios";
import Topic from "./Topic";
//import PollMsg from './PollMsg';
//import SubData from '../config.json';

class Sub1 extends React.Component {
  state = {
    name: null,
    // topicslist: null,
    message: " ",
    //items: null
    // isSubT1: false,
    // isSubT2: false,
    // isSubT3: false,
  };
  ws = new WebSocket(
    "ws://ec2-3-143-229-250.us-east-2.compute.amazonaws.com:80/broker1"
  );

  componentDidMount() {
    console.log("In mount phase ");
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log("connected with web socket");
    };

    this.ws.onmessage = (evt) => {
      // listen to data sent from the websocket server
      const message = JSON.parse(evt.data);
      this.setState({ message: message });
      console.log(message);
    };

    this.ws.onclose = () => {
      console.log("disconnected");
      // automatically try to reconnect on connection loss
    };

    // this.timer = setInterval(() => this.getItems(), 1000);
  }

  componentWillUnmount() {
    //console.log("In Sub unmount");
    // clearInterval(this.timer);
    // this.timer = null;
  }
  // copy(a,b)
  // {
  //     //console.log("b = ", b );
  //     a = b;
  //     //console.log("a = ", a )

  // }

  // async getResponse()
  // {
  //     //console.log("id in getresponse for polling",this.state.name.sub_id);
  //     //console.log("id in getresponse for polling",this.props.subselected.sub_id);
  //     var url = "http://localhost:8090/v1/poll/"+ this.state.name.sub_id ;
  //     const res = await fetch (url)
  //     console.log(url)
  //     const ret = await res.json()
  //     console.log("Inside Get Response :", ret)
  //     this.setState({ topicslist: ret })
  //     return ret
  // }

  // getItems() {
  //     //console.log("Finally",obj);
  //     var obj = this.getResponse()
  // }

  //   onSubSelect(SubId) {
  //     console.log("In sub subscription set", SubId);
  //     if (SubId == "topic1") {
  //       console.log("is subscribed to topic1 before", this.state.isSubT1);
  //       this.setState({ isSubT1: !this.state.isSubT1 });
  //       console.log("is subscribed to topic1 after", this.state.isSubT1);
  //     } else if (SubId == "topic2") {
  //       console.log("is subscribed to topic2 before", this.state.isSubT2);
  //       this.setState({ isSubT2: !this.state.isSubT2 });
  //       console.log("is subscribed to topic2 after", this.state.isSubT2);
  //     } else if (SubId == "topic3") {
  //       console.log("is subscribed to topic3 before", this.state.isSubT3);
  //       this.setState({ isSubT3: !this.state.isSubT3 });
  //       console.log("is subscribed to topic3 after", this.state.isSubT3);
  //     }
  //     // this.setState({ SelectedSubId: SubId });
  //   }
  isSubscribe() {
    //console.log("comparison",this.state.sub_val);
    if (this.props.issubscribed == "true") {
      return "UnSubscribe to ";
    } else {
      return "Subscribe to ";
    }
  }

  render() {
    console.log("web socket message", this.props.message);
    if (this.props.subselected != this.state.name) {
      this.setState({ name: this.props.subselected });
    }
    console.log("In render() of subscriber page", this.props.subselected);
    //console.log("props in sub",this.props.subselected);
    //console.log("name state", this.state.name);
    //console.log("topicslist ", this.state.topicslist);
    if (this.props.subselected) {
      var subname = this.props.subselected.name;
    }
    //const TData = this.state.topicslist;

    // if (TData) {
    //   const TTData = TData.topics;

    return (
      <div>
        <h1> Hii Welcome back {subname} </h1>
        <button
          onClick={() => this.props.onClick(this.props.subselected, 1)}
          className="btn btn-secondary btn-sm"
        >
          {this.isSubscribe()}
        </button>{" "}
        <span>Topic1</span>{" "}
        <textarea
          style={this.props.issubscribed == "true" ? {} : { display: "none" }}
          name="body"
          value={this.props.message}
        />
        <p> </p>
        <button
          onClick={() => this.props.onClick(this.props.subselected, 2)}
          className="btn btn-secondary btn-sm"
        >
          {this.isSubscribe()}
        </button>{" "}
        <span>Topic2</span>{" "}
        <textarea
          style={this.props.issubscribed == "true" ? {} : { display: "none" }}
          name="body"
          value={this.props.message}
        />
        <p> </p>
        <button
          onClick={() => this.props.onClick(this.props.subselected, 3)}
          className="btn btn-secondary btn-sm"
        >
          {this.isSubscribe()}
        </button>{" "}
        <span>Topic3</span>{" "}
        <textarea
          style={this.props.issubscribed == "true" ? {} : { display: "none" }}
          name="body"
          value={this.props.message}
        />
        <p> </p>
        {/* <Topic
          value="topic1"
          issubscribed={this.state.isSubT1}
          message={this.state.message}
          onClick={(SubID) => this.onSubSelect(SubID)}
        />
        <Topic
          value="topic2"
          issubscribed={this.state.isSubT2}
          message={this.state.message}
          onClick={(SubID) => this.onSubSelect(SubID)}
        />
        <Topic
          value="topic3"
          issubscribed={this.state.isSubT3}
          message={this.state.message}
          onClick={(SubID) => this.onSubSelect(SubID)}
        /> */}
        {/* {TTData.map((topic) => (
          <Topic
            key={topic.topicId}
            value={topic.topicName}
            subid={TData.subscriberId}
            id={topic.topicId}
            ischange={topic.isChange}
            issubscribed={topic.subscribed}
            message={topic.message}
          />
        ))} */}
      </div>
    );
    //     } else {
    //       return (
    //         <div>
    //           <h1> Hii Welcome back </h1>
    //         </div>
    //       );
    //     }
  }
}

export default Sub1;
