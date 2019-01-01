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
            <CardHeader>Add New Customer</CardHeader>
            <CardBody>
              <Form action="" method="post">
                <div className="row">
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Name</Label>
                      <Input
                        type="text"
                        id="postal-code"
                        placeholder="Customer Name"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Mobile</Label>
                      <Input
                        type="text"
                        id="postal-code"
                        placeholder="Customer Mobile Numer"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Address</Label>
                      <Input
                        type="text"
                        id="postal-code"
                        placeholder="Enter Bill No"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Date of Birth</Label>
                      <Input
                        type="date"
                        id="postal-code"
                        placeholder="Enter DoB"
                      />
                    </FormGroup>
                  </Col>

                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Wedding Date</Label>
                      <Input
                        type="date"
                        id="postal-code"
                        placeholder="Enter Wedding Date"
                      />
                    </FormGroup>
                  </Col>
                </div>
              </Form>
            </CardBody>
            <CardFooter className="pull-right">
              <Button type="submit" size="sm" color="primary">
                <i className="fa fa-dot-circle-o" /> Add New Customer
              </Button>
              <Button type="reset" size="sm" color="danger">
                <i className="fa fa-ban" /> Reset
              </Button>
            </CardFooter>
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
            <CardHeader>Customer Details</CardHeader>
            <CardBody>
              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Customer Name</th>
                    <th>Customer Mobile</th>
                    <th>Customer DoB</th>
                    <th>Customer Wedding Date</th>
                    <th>Total Purchased</th>
                    <th>Options</th>
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
  }
}

export default Tabs;
