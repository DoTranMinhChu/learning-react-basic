import React from "react";
import ChildComponent from './ChildComponent';

class MyClassComponents extends React.Component {
  state = {
    firstName: "Minh",
    lastName: "Chu",
  };

  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // prevent action defaut (submit) of button (type="submit")
    console.log("Check data input : " + this.state);
    alert("Hello " + this.state.firstName + " " + this.state.lastName);
  };

  render() {
    return (
      <>
        <div>
          <h1>
            Your name : {this.state.firstName} {this.state.lastName}
          </h1>
          <form action="">
            <label>First name:</label>
            <br />
            <input
              type="text"
              value={this.state.firstName}
              onChange={(event) => this.handleChangeFirstName(event)}
            />
            <br />
            <label>Last name:</label>
            <br />
            <input
              type="text"
              value={this.state.lastName}
              onChange={(event) => this.handleChangeLastName(event)}
            />
            <br />
            <br />
            <input
              type="submit"
              value="Submit"
              onClick={(event) => this.handleSubmit(event)}
            />
          </form>
        </div>

        <ChildComponent name={'Child one'} age={21}/>
      </>
    );
  }
}

export default MyClassComponents;
