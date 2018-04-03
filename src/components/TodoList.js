// import React from 'react';

// const TodoList = (props) => {
//   const todoList = props.todoList.map((item) => (
//     <li
//       key= {item.id}
//       style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
//       onClick={() => props.toggleTodo(item.id)}
//     >
//       {item.text}
//     </li>
//   ))
//   return (
//     <ul>
//       { todoList }
//     </ul>
//   )
// }

// export default TodoList;

import React, { Component } from 'react'

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getTodoList();
  }

  render() {
    const todoList = this.props.todoList.map((item) => (
      <li
        key= {item.id}
        style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
        onClick={() => this.props.toggleTodo(item.id)}
      >
        {item.text}
      </li>
    ))
    return (
      <ul>
        { todoList }
      </ul>
    )
  }
}

