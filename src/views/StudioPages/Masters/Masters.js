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
                  <Label htmlFor="nf-email">Category</Label>
                  <Input
                    type="email"
                    id="nf-email"
                    name="nf-email"
                    placeholder="Enter Category"
                    autoComplete="email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="appendedInputButtons">Item</Label>
                  <div className="controls">
                    <InputGroup>
                      <Input
                        id="appendedInputButtons"
                        size="16"
                        type="text"
                        placeholder="Enter Item Name"
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
        <Col xs="12" sm="12" md="6">
          <Card>
            <CardHeader>Pricing Details</CardHeader>
            <CardBody>
              <Form action="" method="post">
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
                  <Label htmlFor="nf-email">Items</Label>
                  <Input type="select" name="select" id="select">
                    <option value="0">Please select</option>
                    <option value="1">Option #1</option>
                    <option value="2">Option #2</option>
                    <option value="3">Option #3</option>
                  </Input>
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

  GSTEntry() {
    return (
      <div class="row">
        <Col xs="12" sm="12" md="6">
          <Card>
            <CardHeader>GST</CardHeader>
            <CardBody>
              <Form action="" method="post">
                <FormGroup>
                  <Label htmlFor="nf-email">CGST %</Label>
                  <Input
                    type="email"
                    id="nf-email"
                    name="nf-email"
                    placeholder="Enter CGST"
                    autoComplete="email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="appendedInputButtons">SGST %</Label>
                  <div className="controls">
                    <InputGroup>
                      <Input
                        id="appendedInputButtons"
                        size="16"
                        type="text"
                        placeholder="Enter SGST"
                      />
                      <InputGroupAddon addonType="append">
                        <Button color="secondary">Submit</Button>
                        <Button color="secondary">Reset</Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </div>
                </FormGroup>
              </Form>
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
        <TabPane tabId="2">{this.GSTEntry()}</TabPane>
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
                  GST
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
