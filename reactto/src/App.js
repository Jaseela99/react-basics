import React from "react";
import UseState from "./components/UseState";
import Class from "./components/Class";
import Events from "./components/Events";
import Parent from "./components/Parent";
import ListContainer from "./components/ListContainer";
function App() {
  return (
    <div className="App">
      <UseState/> 
      <Class/> 
    <Events/> 
    <Parent/> 
   <ListContainer/>
    </div>
  );
}

export default App;
