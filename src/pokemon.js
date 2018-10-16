import React, { Component }from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import axios from 'axios';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      error: null,
    }
  }
  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then( res => {
          console.log('this is the state items',res.data.results);
          return res;
        })
        .then(
        (response) => {
          this.setState({
            isLoaded: true,
            items: response.data.results
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
        <Accordion atomic={false}>
        {this.state.items.map( (item, index) => {
          return (
            <AccordionItem title={item.name} key={index}>
            <h4>{item.url}</h4>
            </AccordionItem>
          )
        })}

        </Accordion>
        
      );
    }
  }
}

export default Pokemon;