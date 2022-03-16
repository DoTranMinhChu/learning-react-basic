import React from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

class HOC extends React.Component {
  render() {
    return (
      <>
        <ClickCounter name="ClickCounter Button"/>
        <HoverCounter name="ClickCounter Button"/>
      </>
    );
  }
}

export default HOC;
