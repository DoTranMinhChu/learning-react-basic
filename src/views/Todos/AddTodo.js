import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    newTitle: "",
  };

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  handleAdd = (event) => {
    event.preventDefault();
    if (!this.state.newTitle) {
      toast.error(`Missing title's Todo!`);
      return;
    }
    let newId = "todo" + this.getRandomInt(0, 1000);
    let newTitle = this.state.newTitle;

    this.props.addTodo({
      id: newId,
      title: newTitle,
    });
    this.setState({
      newTitle: "",
    });
  };
  handleChangeNewTitle = (event) => {
    this.setState({
      newTitle: event.target.value,
    });
  };
  render() {
    return (
      <>
        <div className="add-todo">
          <input
            type="text"
            value={this.state.newTitle}
            onChange={(event) => {
              this.handleChangeNewTitle(event);
            }}
          />
          <button
            className="btn"
            onClick={(event) => {
              this.handleAdd(event);
            }}
          >
            Add
          </button>
        </div>
      </>
    );
  }
}

export default AddTodo;
