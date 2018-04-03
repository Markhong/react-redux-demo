import { ADDTODO } from '../constants/enumActions';

// function actionCreator(text) {
//   return (dispatch, getState) => {
//     // console.log('begin...');
//     fetch('../data/data.json')
//     .then(response => response.json())
//     .then(json => {
//       dispatch({
//         type: ADDTODO,
//         payload: {text: json.todoList[0].text, completed: false},
//       });
//     })
//   };
// }

function addTodo(text) {
  return {
    type: ADDTODO,
    payload: {text, completed: false},
  }
}

export default addTodo;