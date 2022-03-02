import React from "react";

class MyClassComponents extends React.Component {
  render() {
    const name = "MinhChu";
    return (
      <div>
        <div>
          {"Screen: " + name}
          {console.log("Console : " + name)}
        </div>
        This is Class Component {name}
      </div>
    );
  }
}

export default MyClassComponents;
