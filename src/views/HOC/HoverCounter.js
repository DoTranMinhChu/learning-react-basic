import React from "react";
import WithCounter from "./WithCounter";

class HoverCounter extends React.Component {
  render() {
    const { count, incrementCount } = this.props;
    console.log(">>> HoverCounter.js - this.props: ",this.props);
    return (
      <div>
        <button onMouseOver={incrementCount}>Hover {count} times</button>
      </div>
    );
  }
}
const stepCount = 5;
export default WithCounter(HoverCounter, stepCount);
