import React, { Component }from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import axios from 'axios';
import './pokemon.css';



class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      error: null,
      advice: [],
    }
  }
  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then(
        (response) => {
          this.setState({
            isLoaded: true,
            items: response.data.results.slice(0,10),
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
      .then( () => {

        this.state.items.map((x, index) => {
          axios.get("http://api.adviceslip.com/advice")
            .then(res => {
              console.log("res in advicecall", res.data.slip.advice);
              this.setState({
                advice: [...this.state.advice, res.data.slip.advice] 
              })
            })
        })
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
         
         
          let srcUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;
          
          return (
            <AccordionItem title={item.name} key={index}>
              <div className="pokebloc">
              <img src={srcUrl} alt="" />
              <GetAdvice advice={this.state.advice[index]} />

              </div>
            </AccordionItem>
          )
        })}

        </Accordion>
        
      );
    }
  }
}

export default Pokemon;

const GetAdvice = (props) => {
   
   
    return <h4>{props.advice}</h4>;
}