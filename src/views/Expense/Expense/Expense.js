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

  lorem() {
    return "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.";
  }

  masterEntry() {
    return (
      <div class="row">
        <Col xs="12" sm="12" md="12">
          <Card>
            <CardHeader>Expense Master Details</CardHeader>
            <CardBody>
              <Form action="" method="post">
                <FormGroup>
                  <Label htmlFor="nf-email">Type</Label>
                  <Input type="select" name="select" id="select">
                    <option value="0">Please select</option>
                    <option value="1">Option #1</option>
                    <option value="2">Option #2</option>
                    <option value="3">Option #3</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="appendedInputButtons">Expense Name</Label>
                  <div className="controls">
                    <InputGroup>
                      <Input
                        id="appendedInputButtons"
                        size="16"
                        type="text"
                        placeholder="Expense Name"
                      />
                      <InputGroupAddon addonType="append">
                        <Button color="secondary">Submit</Button>
                        <Button color="secondary">Reset</Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </div>
                </FormGroup>
              </Form>

              <Row>
                <Col>
                  <Table hover bordered striped responsive size="sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>2012/01/01</td>
                        <td>Member</td>
                        <td>
                          <Button
                            size="sm"
                            className="btn-facebook btn-brand mr-1 mb-1"
                          >
                            <i className="fa fa-edit" />
                          </Button>
                          <Button
                            size="sm"
                            className="btn-html5 btn-brand mr-1 mb-1"
                          >
                            <i className="fa fa-trash" />
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>2012/02/01</td>
                        <td>Staff</td>
                        <td>
                          <Button
                            size="sm"
                            className="btn-facebook btn-brand mr-1 mb-1"
                          >
                            <i className="fa fa-edit" />
                          </Button>
                          <Button
                            size="sm"
                            className="btn-html5 btn-brand mr-1 mb-1"
                          >
                            <i className="fa fa-trash" />
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>2012/02/01</td>
                        <td>Admin</td>
                        <td>
                          <Button
                            size="sm"
                            className="btn-facebook btn-brand mr-1 mb-1"
                          >
                            <i className="fa fa-edit" />
                          </Button>
                          <Button
                            size="sm"
                            className="btn-html5 btn-brand mr-1 mb-1"
                          >
                            <i className="fa fa-trash" />
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>2012/03/01</td>
                        <td>Member</td>
                        <td>
                          <Button
                            size="sm"
                            className="btn-facebook btn-brand mr-1 mb-1"
                          >
                            <i className="fa fa-edit" />
                          </Button>
                          <Button
                            size="sm"
                            className="btn-html5 btn-brand mr-1 mb-1"
                          >
                            <i className="fa fa-trash" />
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>2012/01/21</td>
                        <td>Staff</td>
                        <td>
                          <Button
                            size="sm"
                            className="btn-facebook btn-brand mr-1 mb-1"
                          >
                            <i className="fa fa-edit" />
                          </Button>
                          <Button
                            size="sm"
                            className="btn-html5 btn-brand mr-1 mb-1"
                          >
                            <i className="fa fa-trash" />
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <nav>
                    <Pagination>
                      <PaginationItem>
                        <PaginationLink previous tag="button">
                          Prev
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem active>
                        <PaginationLink tag="button">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink tag="button">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink tag="button">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink tag="button">4</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink next tag="button">
                          Next
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }

  OrderDetails() {
    return (
      <div class="row">
        <Col xs="12" sm="12" md="12">
          <Card>
            <CardHeader>Order Details</CardHeader>
            <CardBody>
              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Bill No</th>
                    <th>Customer Name</th>
                    <th>Bill Date</th>
                    <th>Total Amount</th>
                    <th>Status</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody />
              </Table>

              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Category</th>
                    <th>Item Name</th>
                    <th>Quantity</th>
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

  ExpenseEntry() {
    return (
      // <div className="col-md-12">
      <Col xs="12" sm="12" md="12">
        <Card>
          <CardHeader>Search</CardHeader>
          <CardBody>
            <Form action="" method="post">
              <div className="row">
                <Col xs="3">
                  <FormGroup>
                    <Label htmlFor="postal-code">Type</Label>
                    <Input
                      type="text"
                      id="postal-code"
                      placeholder="Expense Type"
                    />
                  </FormGroup>
                </Col>
                <Col xs="3">
                  <FormGroup>
                    <Label htmlFor="postal-code">Expense Name</Label>
                    <Input
                      type="text"
                      id="postal-code"
                      placeholder="Expense Name"
                    />
                  </FormGroup>
                </Col>
                <Col xs="3">
                  <FormGroup>
                    <Label htmlFor="postal-code">Amount</Label>
                    <Input
                      type="number"
                      id="postal-code"
                      placeholder="Amount"
                    />
                  </FormGroup>
                </Col>
                <Col xs="3">
                  <FormGroup className="p-4">
                    <Button type="submit" size="sm" color="primary">
                      <i className="fa fa-dot-circle-o" /> + Add
                    </Button>
                    <Button type="reset" size="sm" color="danger">
                      <i className="fa fa-ban" /> Add Manual
                    </Button>
                  </FormGroup>
                </Col>
              </div>
            </Form>

            <Table hover bordered striped responsive size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Work Type</th>
                  <th>Company</th>
                  <th>Amount</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody />
            </Table>
          </CardBody>
        </Card>
      </Col>
      // </div>
    );
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice();
    newArray[tabPane] = tab;
    this.setState({
      activeTab: newArray
    });
  }

  tabPane() {
    return (
      <>
        <TabPane tabId="1">{this.masterEntry()}</TabPane>
        <TabPane tabId="2">
          {this.OrderDetails()} {this.ExpenseEntry()}
        </TabPane>
        {/* <TabPane tabId="3">{this.OrderDetails()}</TabPane> */}
      </>
    );
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === "1"}
                  onClick={() => {
                    this.toggle(0, "1");
                  }}
                >
                  Master
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === "2"}
                  onClick={() => {
                    this.toggle(0, "2");
                  }}
                >
                  Expense Entry
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === "3"}
                  onClick={() => {
                    this.toggle(0, "3");
                  }}
                >
                  Over Heads
                </NavLink>
              </NavItem> */}
            </Nav>
            <TabContent activeTab={this.state.activeTab[0]}>
              {this.tabPane()}
            </TabContent>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Tabs;
