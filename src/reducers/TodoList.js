import { TOGGLETODO, ADDTODO, GETTODOLIST } from '../constants/enumActions';



function TodoList(state=[], action) {
  switch(action.type) {
    case TOGGLETODO: {
      return state.map(todo => {
        return todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
      })
    }
    case ADDTODO: {
      return [
        ...state,
        {
          id: state.length+1,
          text: action.payload.text,
          completed: action.payload.completed
        }
      ]
    }
    case GETTODOLIST: {
      return [...action.payload]
    }
    default:
      return state;
  }
}

export default TodoList;