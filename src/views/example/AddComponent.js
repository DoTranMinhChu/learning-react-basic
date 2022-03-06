import React from "react";

class AddComponent extends React.Component {
  state = {
    jobName: "",
    salary: +"",
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
    if(!this.state.jobName || !this.state.salary){
      alert('Missing infomation');
      return;
    }
    console.log("Check data input : " + this.state);
    this.props.addNewJob({
      id: "j" + this.getRandomInt(0, 1000),
      jobName: this.state.jobName,
      salary: this.state.salary,
    });
    this.setState({
      jobName:'',
      salary:+''
    })
  };

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

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
