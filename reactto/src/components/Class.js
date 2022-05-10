import React, { Component } from "react";
import Function from "./Function";
//component from react
class Class extends Component {
    //state in 
  state = {
    users: [
      { name: "jaseela", age: 20 },
      { name: "jaseena", age: 30 },
      { name: "jaseera", age: 40 },
    ],
    title: "user list",
  };
  //eventhandler is written without const 
  reduceAge = () => {
    const newState = this.state.users.map((user) => {
      user.age-=1;
        return user;
    });
    this.setState(newState);
  };
  //uses render method to return JSX
  render() {
    return (
      <div>
        <button onClick={this.reduceAge}>age reduce</button>
        <h1>{this.state.title}</h1>

        {this.state.users.map((user) => {
         return <Function age={user.age}>{user.name}</Function>;
        })}
      </div>
    );
  }
}
export default Class;
