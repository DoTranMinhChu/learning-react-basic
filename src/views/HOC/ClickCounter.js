import React from "react";
import WithCounter from "./WithCounter";

class ClickCounter extends React.Component {
  render() {
    const { count, incrementCount } = this.props;
    console.log(">>> ClickCounter.js - this.props: ",this.props);
    return (
      <div>
        <button onClick={incrementCount}>Click {count} times</button>
      </div>
    );
  }
}
const stepCount = 3;
export default WithCounter(ClickCounter,stepCount);
