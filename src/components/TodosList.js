import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  render() {
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={this.props.handleChangeProps}
          deleteTodoProps={this.props.deleteTodoProps}
        />
      ))}
    </ul>;
  }
}

export default TodosList;
