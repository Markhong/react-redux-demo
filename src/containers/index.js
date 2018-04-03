import { connect } from 'react-redux';
import React from 'react';
// import Main from './Main';
// import AddCount from './AddCount';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({

});

const MainElement = connect(mapStateToProps, mapDispatchToProps)(
  () => {
    return (
      <div>
        <TodoList />
        <AddTodo />
      </div>
    )
  }
);



export default MainElement;