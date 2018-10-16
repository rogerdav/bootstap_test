import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

const Test = (props) => (
  <div>
    <h1>React Accordion</h1>
    <Accordion atomic={false}>
      {props.info.map( (item, index) => {
        console.log('item', item);
        return (
          <AccordionItem key={index} title={props.title[index]}>
            <DummyContent info={item}/>
          </AccordionItem>

        )

      })
    }
      

    </Accordion>
  </div>
);

const DummyContent = (props) => {
  console.log('in dummy content',props.info)

  const newLocal = (
    <div>
      <h4>{props.info[0]}</h4>
      <h4>{props.info[1]}</h4>
      <h4>{props.info[2]}</h4>
      <h4>test</h4>;

    </div>
    );
  
  return newLocal

}

  


export default Test;