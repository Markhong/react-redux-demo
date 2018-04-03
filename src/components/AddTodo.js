import React from 'react';

const AddTodo = (props) => {
  let input;
  return (
    <div>
      <input type='text' ref={ele => input = ele} />
      <button onClick={() => {
        if(input.value.trim())
          {
            props.addTodo(input.value);
            input.value='';
          }
        }
      }>Add</button>
    </div>
  )
}

export default AddTodo;