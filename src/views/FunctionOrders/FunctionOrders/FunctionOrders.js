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
        <Col xs="12" sm="12" md="6">
          <Card>
            <CardHeader>Master Details</CardHeader>
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
                  <Label htmlFor="appendedInputButtons">Name</Label>
                  <div className="controls">
                    <InputGroup>
                      <Input
                        id="appendedInputButtons"
                        size="16"
                        type="text"
                        placeholder="Enter Name"
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
                        <th>Master Description</th>
                        <th>Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
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
        <Col xs="12" sm="12" md="6">
          <Card>
            <CardHeader>Pricing Details</CardHeader>
            <CardBody>
              <Form action="" method="post">
                <FormGroup>
                  <Label htmlFor="nf-email">Item Name</Label>
                  <Input type="select" name="select" id="select">
                    <option value="0">Please select</option>
                    <option value="1">Option #1</option>
                    <option value="2">Option #2</option>
                    <option value="3">Option #3</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="nf-email">Category</Label>
                  <Input type="select" name="select" id="select">
                    <option value="0">Please select</option>
                    <option value="1">Option #1</option>
                    <option value="2">Option #2</option>
                    <option value="3">Option #3</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="appendedInputButtons">Description</Label>
                  <div className="controls">
                    <InputGroup>
                      <Input id="appendedInputButtons" size="16" type="text" />
                    </InputGroup>
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="appendedInputButtons">Price</Label>
                  <div className="controls">
                    <InputGroup>
                      <Input
                        id="appendedInputButtons"
                        size="16"
                        type="number"
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
                        <th>Category</th>
                        <th>Item Name</th>
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

  QuotePrepare() {
    return (
      <div className="col-md-12">
        <Col>
          <Card>
            <CardHeader>
              Add Customer Details
              <Button
                type="submit"
                size="sm"
                color="primary"
                className="float-right"
              >
                <i className="fa fa-dot-circle-o" /> Update Customer
              </Button>
            </CardHeader>
            <CardBody>
              <Form action="" method="post">
                <div className="row">
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
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Customer Mobile</Label>
                      <Input
                        type="text"
                        id="postal-code"
                        placeholder="Customer Mobile"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Place</Label>
                      <Input type="text" id="postal-code" placeholder="Place" />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Event Name</Label>
                      <Input
                        type="text"
                        id="postal-code"
                        placeholder="Event Name"
                      />
                    </FormGroup>
                  </Col>

                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Bill Date</Label>
                      <Input type="date" id="postal-code" />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Bill To</Label>
                      <Input type="date" id="postal-code" />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Reference Name</Label>
                      <Input
                        type="text"
                        id="postal-code"
                        placeholder="Reference Name"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Reference Mobile</Label>
                      <Input
                        type="text"
                        id="postal-code"
                        placeholder="Reference Mobile"
                      />
                    </FormGroup>
                  </Col>

                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Bride Name</Label>
                      <Input
                        type="text"
                        id="postal-code"
                        placeholder="Bride Name"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Bride Mobile</Label>
                      <Input
                        type="text"
                        id="postal-code"
                        placeholder="Bride Mobile"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Groom Name</Label>
                      <Input
                        type="text"
                        id="postal-code"
                        placeholder="Groom Name"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="postal-code">Groom Mobile</Label>
                      <Input
                        type="text"
                        id="postal-code"
                        placeholder="Groom Mobile"
                      />
                    </FormGroup>
                  </Col>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }

  AddQuote() {
    return (
      <div className="col-md-12">
        <Col>
          <Card>
            <CardHeader>
              Add Customer Details
              <Button
                type="submit"
                size="sm"
                color="primary"
                className="float-right m-1"
              >
                <i className="fa fa-dot-circle-o" /> Add Manual
              </Button>
              <Button
                type="submit"
                size="sm"
                color="primary"
                className="float-right m-1"
              >
                <i className="fa fa-dot-circle-o" /> Print
              </Button>
              <Button
                type="submit"
                size="sm"
                color="primary"
                className="float-right m-1"
              >
                <i className="fa fa-dot-circle-o" /> Send Mail
              </Button>
            </CardHeader>
            <CardBody>
              <Form action="" method="post">
                <div className="row">
                  <Col xs="2">
                    <FormGroup>
                      <Label htmlFor="postal-code">Type</Label>
                      <Input
                        type="text"
                        id="postal-code"
                        placeholder="Customer Name"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="2">
                    <FormGroup>
                      <Label htmlFor="postal-code">Item Name</Label>
                      <Input
                        type="text"
                        id="postal-code"
                        placeholder="Customer Mobile"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="2">
                    <FormGroup>
                      <Label htmlFor="postal-code">Description</Label>
                      <Input type="text" id="postal-code" placeholder="Place" />
                    </FormGroup>
                  </Col>
                  <Col xs="2">
                    <FormGroup>
                      <Label htmlFor="postal-code">Price</Label>
                      <Input
                        type="number"
                        id="postal-code"
                        placeholder="Place"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="1">
                    <FormGroup>
                      <Label htmlFor="postal-code">Quantity</Label>
                      <Input
                        type="number"
                        id="postal-code"
                        placeholder="Place"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="2">
                    <FormGroup>
                      <Label htmlFor="postal-code">Total</Label>
                      <Input
                        type="number"
                        id="postal-code"
                        placeholder="Place"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="1">
                    <FormGroup>
                      <Button
                        type="button"
                        size="sm"
                        color="primary"
                        className="float-right p-4"
                      >
                        +
                      </Button>
                    </FormGroup>
                  </Col>
                </div>
              </Form>

              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Item Name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Units / Sheets</th>
                    <th>Amount</th>
                    <th>Prework</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody />
              </Table>

              <Form action="" method="post">
                <div className="row">
                  <Col xs="2">
                    <FormGroup>
                      <Label htmlFor="postal-code">Collected Amount</Label>
                      <Input
                        type="text"
                        id="postal-code"
                        placeholder="Collected Amount"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="2">
                    <FormGroup>
                      <Label htmlFor="postal-code">Advance</Label>
                      <Input
                        type="text"
                        id="postal-code"
                        placeholder="Advance Amount"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="2">
                    <FormGroup>
                      <Label htmlFor="postal-code">Total</Label>
                      <Input type="text" id="postal-code" placeholder="Total" />
                    </FormGroup>
                  </Col>
                  <Col xs="2">
                    <FormGroup>
                      <Label htmlFor="postal-code">Discount</Label>
                      <Input
                        type="text"
                        id="postal-code"
                        placeholder="Discount"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="4 p-4">
                    <Button
                      type="button"
                      size="sm"
                      color="primary"
                      className="float-right m-1"
                    >
                      <i className="fa fa-dot-circle-o" /> Confirm
                    </Button>
                    <Button
                      type="button"
                      size="sm"
                      color="primary"
                      className="float-right m-1"
                    >
                      <i className="fa fa-dot-circle-o" /> Submit
                    </Button>
                    <Button
                      type="button"
                      size="sm"
                      color="primary"
                      className="float-right m-1"
                    >
                      <i className="fa fa-dot-circle-o" /> Reset
                    </Button>
                  </Col>
                </div>
              </Form>

              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Customer Name</th>
                    <th>Customer Mobile</th>
                    <th>Event Name</th>
                    <th>Event From</th>
                    <th>Event To</th>
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
          {this.QuotePrepare()} {this.AddQuote()}
        </TabPane>
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
                  Master Data
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === "2"}
                  onClick={() => {
                    this.toggle(0, "2");
                  }}
                >
                  Prepare Quote
                </NavLink>
              </NavItem>
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
