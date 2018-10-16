
import axios from 'axios';
import React, { Component } from 'react';
import {Row, Col, Container} from 'reactstrap';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
       .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data
          });
          
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


render() {
  // const { error, isLoaded, items } = this.state;
  if (this.state.error) {
    return <div>Error: {this.state.error.message}</div>;
  } else if (!this.state.isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container noGutters>
        {this.state.items.map(item => (
          <Row key={item.id} >
            <Col xs={{size: "auto", offset: 0}} pull-left="true">{item.id}</Col>
            <Col sm="auto">{item.title}</Col>
            <Col ></Col>
          </Row>
        ))}
      </Container>
    );
  }
}
}

export default MyComponent;


