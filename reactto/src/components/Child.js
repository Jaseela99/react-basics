import React from "react";

const Child = (props) => {
    //event handler is called here and is passed to parent component
   // The child component calls the parent callback function using props and passes the data to the parent component.
  const trigger = () => {
      //callback for parent component
 props.trigger("helloii");
  };
  return (
    <div>
      <div>{props.data}</div>
      <button onClick={trigger}>click me</button>
    </div>
  );
};

export default Child;
