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

 class List extends Component {
    constructor (props) {
      super(props);
      this.state =  {
        col: this.props.col,
      }
    }
   
   render () {
    
      return (
        <div>
          <Container>
            <Row>

            This is Row no {this.props.row}
            {this.state.col.map((col, index) => {
              return (
              <Col key={index}>
              This is Col no {col} 
              </Col>

              )
            })}
            </Row>
            
          </Container>
        </div>
      )
    }
    
 }

 export default List;