import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
} from "reactstrap";
import SubList from "./SubList.json";
import SubscriberList from "./SubscriberList";
import HeaderComponent from "./HeaderComponent";
import Subscriber1 from "./Subscriber1";

const divStyle = {
  display: "flex",
  alignItems: "center",
};

class MainComponent extends Component {
  state = {
    list: SubList,
    SelectedSubId: null,
    isSubT1: false,
    isSubT2: false,
    isSubT3: false,
    message: " ",
  };

  //   ws = new WebSocket(
  //     "ws://ec2-3-143-229-250.us-east-2.compute.amazonaws.com:80/broker1"
  //   );

  //   componentDidMount() {
  //     console.log("In mount phase ");
  //     this.ws.onopen = () => {
  //       // on connecting, do nothing but log it to the console
  //       console.log("connected with web socket");
  //     };

  //     this.ws.onmessage = (evt) => {
  //       // listen to data sent from the websocket server
  //       const message = JSON.parse(evt.data);
  //       this.setState({ message: message });
  //       console.log(message);
  //     };

  //     this.ws.onclose = () => {
  //       console.log("disconnected");
  //       // automatically try to reconnect on connection loss
  //     };

  //     // this.timer = setInterval(() => this.getItems(), 1000);
  //   }

  onSubSelect(SubId) {
    this.setState({ SelectedSubId: SubId });
  }

  onTopicSelect(SubId, topicid) {
    console.log("In sub subscription set", SubId);
    if (SubId == "1") {
      console.log("is subscribed to topic1 before", this.state.isSubT1);
      this.setState({ isSubT1: !this.state.isSubT1 });
      console.log("is subscribed to topic1 after", this.state.isSubT1);
    } else if (SubId == "2") {
      console.log("is subscribed to topic2 before", this.state.isSubT2);
      this.setState({ isSubT2: !this.state.isSubT2 });
      console.log("is subscribed to topic2 after", this.state.isSubT2);
    } else if (SubId == "3") {
      console.log("is subscribed to topic3 before", this.state.isSubT3);
      this.setState({ isSubT3: !this.state.isSubT3 });
      console.log("is subscribed to topic3 after", this.state.isSubT3);
    }
    // this.setState({ SelectedSubId: SubId });
  }

  render() {
    const List = this.state.list.data;
    console.log("In main", List);
    console.log("selected subId ", this.state.SelectedSubId);

    //{List.map(sub => <SubscriberList key = {sub.sub_id} id={sub.sub_id} subname={sub.name} /> )}
    //<SubscriberList subs = {List} onClick={(SubID) => this.onSubSelect(SubID)} />

    if (List) {
      if (this.state.SelectedSubId) {
        return (
          <div>
            <HeaderComponent />

            <div style={divStyle}>
              <div>
                {List.map((sub) => (
                  <SubscriberList
                    key={sub.sub_id}
                    id={sub.sub_id}
                    subname={sub.name}
                    onClick={(SubID, topicid) =>
                      this.onSubSelect(SubID, topicid)
                    }
                  />
                ))}{" "}
              </div>

              <div>
                <Subscriber1
                  subselected={
                    List.filter(
                      (sub) => sub.sub_id === this.state.SelectedSubId
                    )[0]
                  }
                  onClick={(TopicID) => this.onTopicSelect(TopicID)}
                  message={this.state.message}
                  issubscribed={this.state.isSubT1}
                />{" "}
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <HeaderComponent />
            <div style={divStyle}>
              <div>
                {List.map((sub) => (
                  <SubscriberList
                    key={sub.sub_id}
                    id={sub.sub_id}
                    subname={sub.name}
                    onClick={(SubID) => this.onSubSelect(SubID)}
                  />
                ))}{" "}
              </div>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div>
          <HeaderComponent />
          <h1> Welcome </h1>
        </div>
      );
    }
  }
}

export default MainComponent;
