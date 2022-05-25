import React, { Component } from "react";
//mounting: contructor- render- componentDidMount
class Lifeycle extends Component {
    //component is initalized and a state is defined
  constructor(props) {
      //to make this.props=props
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("constructor");
}
increment=()=>{
    this.setState({
        counter:this.state.counter+1
    })
}
decrement=()=>{
    this.setState({
        counter:this.state.counter-1
    })
}
  componentDidMount(){
      //it confirms that the component is placed on dom and ready to be used and this is consoled once
      //it is asame as using useeffect with []
    console.log("componentDidMount");
    
  }
  
  render() {
      return <div>
        <button onClick={this.increment}>increment  </button> 
        <button onClick={this.decrement}>decrement  </button> 
            counter:{this.state.counter}
    {console.log("rendered")}
    </div>;
  }
  componentDidUpdate(){
 //updates after the state changes and itis called everytime the state or props changes 
 //useeffect with [state/props]
        console.log("componentDidUpdate");
    }
}

export default Lifeycle;
