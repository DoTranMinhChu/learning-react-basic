import React from "react";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
import "./ListTodo.scss";

class ListTodo extends React.Component {
  state = {
    listTodo: [
      { id: "todo1", title: "Learning" },
      { id: "todo2", title: "Cooking" },
      { id: "todo3", title: "Sleeping" },
      { id: "todo4", title: "Working" },
    ],
    editTodo: {},
  };

  handleAddTodo = (newTodo) => {
    this.setState({
      listTodo: [...this.state.listTodo, newTodo],
    });
    toast.success("Success adding to listTodo!");
  };

  handleDeleteTodo = (todo) => {
    let currentTodo = this.state.listTodo;
    currentTodo = currentTodo.filter((item) => item.id !== todo.id);
    this.setState({
      listTodo: currentTodo,
    });
    toast.success("Success delete!");
  };

  handleEditTodo = (todo) => {
    this.setState({
      editTodo: todo,
    });
  };

  handlSaveTodo = () => {
    let { editTodo, listTodo } = this.state;
    let currentTodo = [...listTodo];
    let objIndex = currentTodo.findIndex((obj) => obj.id === editTodo.id);
    currentTodo[objIndex].title = editTodo.title;
    this.setState({
      listTodo: currentTodo,
      editTodo: {},
    });
    toast.success("Success save!");
  };

  handleChangeEditTodo = (event) => {
    this.setState({
      editTodo: { id: this.state.editTodo.id, title: event.target.value },
    });
  };

  render() {
    let { listTodo, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log(">>> check isEmptyObj : ", isEmptyObj);
    return (
      <div className="list-todo-container">
        <AddTodo addTodo={this.handleAddTodo} />
        <div className="list-todo-content">
          <table>
            <thead>
              <tr>
                <th>NO</th>
                <th>Todo id</th>
                <th>Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {listTodo.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>
                      {!isEmptyObj && item.id === editTodo.id ? (
                        <input
                          title="text"
                          value={editTodo.title}
                          onChange={(event) => this.handleChangeEditTodo(event)}
                        ></input>
                      ) : (
                        item.title
                      )}
                    </td>
                    <td>
                      {!isEmptyObj && item.id === editTodo.id ? (
                        <button onClick={() => this.handlSaveTodo()}>
                          Save
                        </button>
                      ) : (
                        <button onClick={() => this.handleEditTodo(item)}>
                          Edit
                        </button>
                      )}

                      <button onClick={() => this.handleDeleteTodo(item)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListTodo;
