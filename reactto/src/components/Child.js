import React from "react";

const Child = (props) => {
    //event handler is called here and is passed to parent component
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
