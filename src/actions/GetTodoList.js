import { GETTODOLIST } from '../constants/enumActions';

function getTodoList() {
  return (dispatch, getState) => {
    fetch('../data/data.json')
      .then(response => response.json())
      .then(json => dispatch({
        type: GETTODOLIST,
        payload: json.todoList,
      }))
  }
}

export default getTodoList;