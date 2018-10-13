
import axios from 'axios';
import React, { Component } from 'react';

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
      .then(res => {
        
        console.log('parsed responce', res.data)
        return res;
      })
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
    
    return (
      <div>
        {this.state.items.map((item, index) => {
          return <div key={index}>{index} {item.title}
          </div>
        })}
      </div>
    
    )
}
}

export default MyComponent;



