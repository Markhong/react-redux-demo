import { combineReducers } from 'redux';
// import AddCount from './AddCount';
// import Main from './Main';
import TodoList from './TodoList';
// import AddTodo from './AddTodo';

const RootReducers = combineReducers({
  todoList: TodoList,
});

export default RootReducers;