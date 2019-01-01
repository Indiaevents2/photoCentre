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
            <CardHeader>Search</CardHeader>
            <CardBody>
              <Form action="" method="post">
                <div className="row">
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Bill No</Label>
                      <Input
                        type="text"
                        id="postal-code"
                        placeholder="Bill NO"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Customer Name</Label>
                      <Input
                        type="text"
                        id="postal-code"
                        placeholder="Customer Name"
                      />
                    </FormGroup>
                  </Col>
                  {/* <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Users</Label>
                      <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </Input>
                    </FormGroup>
                  </Col> */}
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Status</Label>
                      <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </Input>
                    </FormGroup>
                  </Col>

                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Bill From</Label>
                      <Input
                        type="date"
                        id="postal-code"
                        placeholder="Bill From"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Bill To</Label>
                      <Input
                        type="date"
                        id="postal-code"
                        placeholder="Bill TO"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Delivery From</Label>
                      <Input
                        type="date"
                        id="postal-code"
                        placeholder="Delivery From"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Delivery To</Label>
                      <Input
                        type="date"
                        id="postal-code"
                        placeholder="Delivery To"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Customer Mobile</Label>
                      <Input
                        type="text"
                        id="postal-code"
                        placeholder="Customer Name"
                      />
                    </FormGroup>
                  </Col>
                </div>
              </Form>
            </CardBody>
            <CardFooter className="pull-right">
              <Button type="submit" size="sm" color="primary">
                <i className="fa fa-dot-circle-o" /> Seach
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
            <CardHeader>Bill History</CardHeader>
            <CardBody>
              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Order No</th>
                    <th>Customer Name</th>
                    <th>Customer Mobile</th>
                    <th>Order Date</th>
                    <th>Delivery Date</th>
                    <th>Total Amount</th>
                    <th>Advance Amount</th>
                    <th>Billed By</th>
                    <th>Status</th>
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
