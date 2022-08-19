import React, { Component } from "react";
import InputTodo from "./InputTodo";

class InputTodo extends Component {
  state = {
    title: "",
  };
  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <Header />
        <InputTodo />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </div>
    );
  }
}
export default InputTodo;
