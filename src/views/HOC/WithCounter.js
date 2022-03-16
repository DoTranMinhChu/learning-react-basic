import React from "react";

const WithCounter = (WrappedCompenent, stepCount) => {
  class WitherCounterClass extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      const { name } = this.props;
      this.setState((prevState) => {
        console.log(">>>> ", name, " - PrevState : ", prevState);
        return { count: prevState.count + stepCount };
      });
    };
    render() {
      console.log(">>>> ", this.props.name, " - this.props : ", this.props);
      return (
        <WrappedCompenent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return WitherCounterClass;
};

export default WithCounter;
