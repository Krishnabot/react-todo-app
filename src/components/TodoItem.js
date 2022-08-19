import React from 'react';

function TodoItem(props) {
  return (
    <li>
      <input type="checkbox" />
      {this.props.todo.title}
    </li>
  );
}

export default TodoItem;
