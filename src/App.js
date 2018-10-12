import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';
import Example from './progress';
import './_app.css';
import Modal from './modal';
import List from './list';


class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            listItems: [1,2,3,4,5,6,7,8,9,10],
        };

    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="primary" light expand="md" >
                    <NavbarToggler onClick={this.toggle} />
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="http://www.google.com">Google</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Welcome to React</h1>
                                <p>
                                    <Button
                                        tag="a"
                                        color="success"
                                        size="large"
                                        href="http://reactstrap.github.io"
                                        target="_blank"
                                    >
                                        View Reactstrap Docs
                                    </Button>
                                </p>
                            </Col>
                            <Col>
                              <h1>hello World</h1>
                            </Col>
                            <Col>
                              <h1>hello World</h1>
                            </Col>
                            <Col>
                              <h1>hello World</h1>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col>
                                <h1>Welcome to React</h1>
                                <p>
                                    <Button
                                        tag="a"
                                        color="success"
                                        size="large"
                                        href="http://reactstrap.github.io"
                                        target="_blank"
                                    >
                                        View Reactstrap Docs
                                    </Button>
                                </p>
                            </Col>
                            
                        </Row>
                    </Container>
                </Jumbotron>
                <Example this_value="75"/>
                {/* <Modal buttonLabel="Hit Me" my_modal={false}/> */}
                {this.state.listItems.map( (item, index) => {
                  return (
                    <List  key={index} row={item} col={this.state.listItems}>
                    </List>
                  )
                })}
            </div>
        );
    }
}

export default App;
