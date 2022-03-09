import React from "react";
import './Demo.css';

class ChildComponent extends React.Component {

  handleOnclickDelete = (job) =>{
    console.log(job);
    this.props.deleteAJob(job);
  }

  render() {
    console.log(">> Check props : " + this.props);
    let { jobs } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>index</th>
            <th>id</th>
            <th>Job Name</th>
            <th>salary</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index}</td>
                <td>{item.id}</td>
                <td>{item.jobName}</td>
                <td>{item.salary}</td>
                <td><button onClick={()=>this.handleOnclickDelete(item)}>X</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default ChildComponent;
