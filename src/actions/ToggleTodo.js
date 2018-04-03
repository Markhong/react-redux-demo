import { TOGGLETODO } from '../constants/enumActions';

function toggleTodo(id) {
  return {
    type: TOGGLETODO,
    payload: id,
  }
}

export default toggleTodo;