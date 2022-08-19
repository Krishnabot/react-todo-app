import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  render() {
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>;
  }
}

export default TodosList;
