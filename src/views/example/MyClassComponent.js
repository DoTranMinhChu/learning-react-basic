import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";


class MyClassComponents extends React.Component {
  state = {
    jobs: [
      { id: "j001", jobName: "Developer", salary: 500 },
      { id: "j002", jobName: "Tester", salary: 400 },
      { id: "j003", jobName: "Project manager", salary: 1000 },
    ],
    showJobs: false,
    check : 'chu'
    
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  addNewJob = (job) => {
    let currentJobs = this.state.jobs;
    currentJobs.push(job);
    this.setState({
      jobs: currentJobs, // [...this.state.jobs,job]
    });
  };

  deleteAJob = (job) => {
    let currentJobs = this.state.jobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      jobs: currentJobs,
    });
  };

  render() {
    let { showJobs } = this.state;
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <>
          {!showJobs ? (
            <button onClick={() => this.handleShowHide()}>Show</button>
          ) : (
            <>
              <ChildComponent
                jobs={this.state.jobs}
                deleteAJob={this.deleteAJob}
              />
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </>
          )}
        </>
      </>
    );
  }
}

export default MyClassComponents;
