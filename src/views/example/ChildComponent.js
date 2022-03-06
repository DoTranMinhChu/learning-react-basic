import React from "react";

class ChildComponent extends React.Component {

  render() {
    console.log(">> Check props : " + this.props);
    let { jobs } = this.props;
    return (
        <table>
          <thead>
            <tr>
              <th>index</th>
              <th>id</th>
              <th>title</th>
              <th>salary</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index}</td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.salary}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
    );
  }
}

export default ChildComponent;
