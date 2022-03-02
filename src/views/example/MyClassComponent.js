import React from "react";

class MyClassComponents extends React.Component {
  state = {
    name: "DoTranMinhChu",
    yob: 2001
  };

  handleOnChangeName(event){
    this.setState({
        name : event.target.value
    })
  }


  handleOnChangeYob = (event) =>{
    this.setState({
        yob : event.target.value
    })
  }

  handleClickButton = (event) =>{
    console.log(event.target.innerText);
    alert("Hello " + this.state.name);
  }

  render() {
    return (
      <>
        
        <div>This is Class Component, My name is {this.state.name}</div>
        <div>Year of birth is {this.state["yob"]} </div>
        <div>
            <input value={this.state.name} type="text" onChange={(event) => { return this.handleOnChangeName(event)} }/>
        </div>
        <div>
            <input value={this.state.yob} type="number" onChange={ (event) => this.handleOnChangeYob(event)}/>
        </div>
        <div>
            <button onClick={(event)=>this.handleClickButton(event)}>Hey {this.state.name}, click me</button>
        </div>
      </>
    );
  }
}

export default MyClassComponents;
