import React from 'react';
import { Table } from 'reactstrap';
import TableBody from './tableBody';

export default class Example extends React.Component {
  render() {
    return (
      <Table  bordered size="med" striped>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Test</th>
          </tr>
        </thead>
       
          <TableBody trinfo={this.props.info} />
       
      </Table>
    );
  }
}