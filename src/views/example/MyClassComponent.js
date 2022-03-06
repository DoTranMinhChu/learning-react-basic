import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyClassComponents extends React.Component {
  state = {
    jobs: [
      { id: "j001", title: "Developer", salary: 500 },
      { id: "j002", title: "Tester", salary: 400 },
      { id: "j003", title: "Project manager", salary: 1000 },
    ],
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  render() {
    let { showJobs } = this.state;
    return (
      <>
        <AddComponent />
        <>
          {!showJobs ? (
            <button onClick={() => this.handleShowHide()}>Show</button>
          ) : (
            <>
              <ChildComponent jobs={this.state.jobs} />
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </>
          )}
        </>
      </>
    );
  }
}

export default MyClassComponents;
