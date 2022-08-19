import React from 'react';
import TodosList from './TodosList';
import Header from './Header';

class TodoContainer extends React.Component {
state = {
  todos: [],
}

this.setState(prevState => {
  return {
    todos: prevState.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo
    }),
  }
})

delTodo = id => {
  this.setState({
    todos: [
      ...this.state.todos.filter(todo => {
        return todo.id !== id;
      })
    ]
  });
};

addTodoItem = title => {
  const newTodo = {
    id: 4,
    title: title,
    completed: false
  };
  this.setState({
    todos: [...this.state.todos, newTodo]
  });
};

componentDidMount() {
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(response => response.json())
    .then(data => this.setState({ todos: data }));
}

componentDidUpdate(prevProps, prevState) {
  if(prevState.todos !== this.state.todos) {
  }
}

render() {
  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </div>
    </div>
  );
}
export default TodoContainer;
