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
                      <Label htmlFor="postal-code">Mobile</Label>
                      <Input
                        type="text"
                        id="postal-code"
                        placeholder="Enter Mobile"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Name</Label>
                      <Input
                        type="text"
                        id="postal-code"
                        placeholder="Enter Name"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Bill No</Label>
                      <Input
                        type="text"
                        id="postal-code"
                        placeholder="Enter Bill No"
                      />
                    </FormGroup>
                  </Col>
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
                      <Label htmlFor="postal-code">Bill To</Label>
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
                      <Label htmlFor="postal-code">Delivery From</Label>
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
                      <Label htmlFor="postal-code">Delivery To</Label>
                      <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </Input>
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

  paymentDetails() {
    return (
      <div className="col-md-3">
        <Col>
          <Card>
            <CardHeader> Bill Details</CardHeader>
            <CardBody>
              <Col>
                <FormGroup>
                  <Label htmlFor="postal-code">Total Amount</Label>
                  <Input
                    type="number"
                    id="postal-code"
                    placeholder="Total Amount"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label htmlFor="postal-code">Paid Advance</Label>
                  <Input
                    type="number"
                    id="postal-code"
                    placeholder="Paid Advance"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label htmlFor="postal-code">Pending Amount</Label>
                  <Input
                    type="number"
                    id="postal-code"
                    placeholder="Enter Pending Amount"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label htmlFor="postal-code">Paid Amount</Label>
                  <Input
                    type="number"
                    id="postal-code"
                    placeholder="Enter Paid Amount"
                  />
                </FormGroup>
              </Col>
              <Col>
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
            </CardBody>
            <CardFooter>
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

  orderDetails() {
    return (
      <div className="col-md-12">
        <Col>
          <Card>
            <CardHeader>Orders</CardHeader>
            <CardBody>
              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Bill Date</th>
                    <th>Due Date</th>
                    <th>Total Amount</th>
                    <th>Advance Amount</th>
                    <th>Pending Amount</th>
                    <th>Status</th>
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
  subOrderDetails() {
    return (
      <div className="col-md-12">
        <Col>
          <Card>
            <CardHeader>Orders</CardHeader>
            <CardBody>
              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Category</th>
                    <th>Item Name</th>
                    <th>Qty</th>
                    <th>Unit Price</th>
                    <th>Total Amount</th>
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
  billHistory() {
    return (
      <div className="col-md-3">
        <Col>
          <Card>
            <CardHeader>Bill History</CardHeader>
            <CardBody>
              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Amount</th>
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
        <div className="col-md-9">
          <div className="row">
            {this.SearchEntry()}
            {this.orderDetails()}
            {this.subOrderDetails()}
          </div>
        </div>
        <div className="row">
          {this.paymentDetails()}
          {this.billHistory()}
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
