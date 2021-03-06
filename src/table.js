import React from 'react';
import { Table } from 'reactstrap';
import TableBody from './tableBody';
import axios from 'axios';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/photos")
        // .then( res => {
        //   console.log('this is the state items',res.data);
        //   return res;
        // })
        .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data
          });
          // console.log('this state data', this.state.items)
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
    if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>;
    } else if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Table  bordered size="med" striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
              
            </tr>
          </thead>     
          <TableBody trinfo={this.state.items} />
        
        </Table>
        
      );
    }
    
  }
}

