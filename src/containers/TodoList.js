import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import toggleTodo from '../actions/ToggleTodo';
import getTodoList from '../actions/GetTodoList';

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  }
}

const mapDispatchToProps = dispatch => ({
  getTodoList() {
    dispatch(getTodoList());
  },
  toggleTodo(id) {
    dispatch(toggleTodo(id));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);