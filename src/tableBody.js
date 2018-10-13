import React from 'react';
import { Table } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
        <tbody>
          {this.props.trinfo.map ((item, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td>{item[2]}</td>
              <td>{(index + 1) * 1000}</td>
            </tr>

          )
          })
        }
        </tbody>
       
    );
  }
}