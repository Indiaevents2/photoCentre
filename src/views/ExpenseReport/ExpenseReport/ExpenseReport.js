import React, { Component } from "react";
import {
  Badge,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane
} from "reactstrap";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Button,
  ButtonDropdown
} from "reactstrap";
import { Pagination, PaginationItem, PaginationLink, Table } from "reactstrap";
import classnames from "classnames";
const express = require("express");
const app = express();
var mysql = require("mysql");

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill("1")
    };
  }

  SearchEntry() {
    return (
      <div className="col-md-12">
        <Col>
          <Card>
            <CardHeader>Expense Search</CardHeader>
            <CardBody>
              <Form action="" method="post">
                <div className="row">
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="postal-code">Type</Label>
                      <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="postal-code">Company</Label>
                      <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="postal-code">Bill No</Label>
                      <Input
                        type="text"
                        id="postal-code"
                        placeholder="Enter Bill No"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="postal-code">From Date</Label>
                      <Input
                        type="date"
                        id="postal-code"
                        placeholder="Enter DoB"
                      />
                    </FormGroup>
                  </Col>

                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="postal-code">To Date</Label>
                      <Input
                        type="date"
                        id="postal-code"
                        placeholder="Enter Wedding Date"
                      />
                    </FormGroup>
                  </Col>

                  <Col xs="4" className="p-4">
                    <Button type="submit" size="sm" color="primary">
                      <i className="fa fa-dot-circle-o" /> Add New Customer
                    </Button>
                    <Button type="reset" size="sm" color="danger">
                      <i className="fa fa-ban" /> Reset
                    </Button>
                  </Col>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }

  billHistory() {
    return (
      <div className="col-md-12">
        <Col>
          <Card>
            <CardHeader>Expense Summary</CardHeader>
            <CardBody>
              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr>
                    <th>Bill No</th>
                    <th>Work Type</th>
                    <th>Company</th>
                    <th>Bill Date</th>
                    <th>Bill Amount</th>
                    <th>Expense Amount</th>
                    <th>Profit Amount</th>
                  </tr>
                </thead>
                <tbody />
              </Table>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice();
    newArray[tabPane] = tab;
    this.setState({
      activeTab: newArray
    });
  }

  makingRow() {
    return (
      <React.Fragment>
        <div className="col-md-12">
          <div className="row">
            {this.SearchEntry()}
            {this.billHistory()}
          </div>
        </div>
      </React.Fragment>
    );
  }

  tabPane() {
    return <>{this.makingRow()}</>;
  }

  render() {
    return this.tabPane();

    var connection = mysql.createConnection({
      host: "local",
      user: "root",
      database: "tirupurphotocentre"
    });
    connection.connect(function(err) {
      if (err) throw err;
      console.log("connected;");
    });
  }
}

export default Tabs;
