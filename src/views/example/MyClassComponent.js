import React from "react";
import ChildComponent from "./ChildComponent";

class MyClassComponents extends React.Component {
  state = {
    name:'',
    jobs: [
      {id : 'j001',title: 'Developer',salary:'500$'},
      {id : 'j002',title: 'Tester',salary:'400$'},
      {id : 'j003',title: 'Project manager',salary:'1000$'},
    ],
  };

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };


  render() {
    return (
      <>
        <div>
          <h1>
            Your name : {this.state.name} {this.state.lastName}
          </h1>
          <form action="">
            <label>Name:</label>
            <br />
            <input
              type="text"
              value={this.state.name}
              onChange={(event) => this.handleChangeName(event)}
            />
          </form>
        </div>

        <ChildComponent name={this.state.name } age={21} jobs={this.state.jobs}/>
      </>
    );
  }
}

export default MyClassComponents;
