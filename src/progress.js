
import React from 'react';
import { Progress, Badge } from 'reactstrap';
const Example = (props) => {
  
  
  return (
    <div id="progressBar">
      
      <div className="text-center">{props.this_value}<Badge>{props.this_value}</Badge></div>
      <Progress value={props.this_value} />
     
    </div>
  );
};

export default Example;