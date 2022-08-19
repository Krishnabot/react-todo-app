import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <TodosList todos={this.state.todos} />
      </div>
    );
  }
}

export default TodosList;
