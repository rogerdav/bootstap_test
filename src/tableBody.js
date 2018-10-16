import React from 'react';
import { Table, Collapse } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isOpen: false,
    }
    this.toggle = this.toggle.bind(this);

  }
  toggle(e) {

    this.setState({
      isOpen: !this.state.isOpen,
      
    });
  }

  render() {
    const _trinfo = this.props.trinfo.slice(0,15);
    return (
        <tbody>
          {_trinfo.map ((item, index) => {
          const { title, url, thumbnailUrl, id} = item; 
         
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{title}</td>
              <td><img src={thumbnailUrl} _id={id} alt="" onClick={this.toggle}></img></td>
              <Collapse id={id} isOpen={this.state.isOpen}>
              <td><img src={url} alt=""></img></td>
              </Collapse>
              
            </tr>

          )
          })
        }
        </tbody>
       
    );
  }
}