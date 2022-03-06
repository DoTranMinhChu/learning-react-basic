import React from "react";

class AddComponent extends React.Component {
  state = {
    jobName: "",
    salary: +'',
  };

  handleChangeJobName = (event) => {
    this.setState({
      jobName: event.target.value,
    });
  };

  handleChangeSalary = (event) => {
    this.setState({
      salary: +event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // prevent action defaut (submit) of button (type="submit")
    console.log("Check data input : " + this.state);
  };
  render() {
    return (
      <>
          <form action="">
            <label>Job name:</label>
            <br />
            <input
              type="text"
              value={this.state.jobName}
              onChange={(event) => this.handleChangeJobName(event)}
            />
            <br />
            <label>Salary:</label>
            <br />
            <input
              type="number"
              value={this.state.salary}
              onChange={(event) => this.handleChangeSalary(event)}
            />
            <br />
            <br />
            <input
              type="submit"
              value="Submit"
              onClick={(event) => this.handleSubmit(event)}
            />
          </form>
      </>
    );
  }
}

export default AddComponent;
