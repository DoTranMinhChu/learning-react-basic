import React from "react";

class ChildComponent extends React.Component {
  render() {
      console.log('>> Check props : ' + this.props);
    return (
      <>
        <div>Child Component : {this.props.name} - {this.props.age}</div>
      </>
    );
  }
}

export default ChildComponent;
