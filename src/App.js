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
import Table from './table';
import ApiTest from './apicalltest';
import Accordion from './accordion';
import Pokemon from './pokemon';



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
      const testArray = [['roger','davenport','@rnd'],['mandy','davenport','@mmd'],['joshua','davenport','@jmd'],['james','peterson','@jsp'],['roger','davenport','@rnd'],['mandy','davenport','@mmd'],['joshua','davenport','@jmd'],['james','peterson','@jsp']];
      const headingArray = ["testHeading 1" , "testHeading 2" , "testHeading 3", "testHeading 4", "testHeading 5", " testHeading 6", "testHeading 7", "testHeading 8"];
        return (
            <div>
                <Navbar color="danger" light expand="md" >
                    <NavbarBrand href="/">Bootstrap Playground</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
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
               
                
                {/* <Modal buttonLabel="Hit Me" my_modal={false}/> */}
                {/* {this.state.listItems.map( (item, index) => {
                  return (
                    <List  key={index} row={item} col={this.state.listItems}>
                    </List>
                  )
                })} */}
                {/* <Table  info={testArray}/> */}
                {/* <ApiTest /> */}
                {/* <Accordion title={headingArray} info={testArray}/> */}
                <Pokemon />

            </div>
        );
    }
}

export default App;
