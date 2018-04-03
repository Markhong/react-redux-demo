import {connect} from 'react-redux';
import AddTodo from '../components/AddTodo';
import addTodo from '../actions/AddTodo';

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => ({
  addTodo(text) {
    dispatch(addTodo(text));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);