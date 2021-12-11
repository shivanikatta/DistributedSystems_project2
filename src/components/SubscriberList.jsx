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

class SubscriberList extends Component {
  state = {
    subData: this.props,
  };

  componentDidMount() {
    //console.log(" In mount() of the subscriber List page",this.props.subname)
  }

  render() {
    return (
      <div>
        <div className="col-12 col-md-5 m-3">
          <Button
            type="submit"
            color="secondary"
            onClick={() => this.props.onClick(this.props.id)}
          >
            {this.props.subname}
          </Button>
        </div>
      </div>
    );
  }
}

export default SubscriberList;
