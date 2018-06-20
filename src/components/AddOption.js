import React from 'react';

const AddOption = (props) => {
  return (
    <div>
      <form onSubmit={props.handlerAddOption}>
        <input type="text" name='option' placeholder="Add Option component"/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddOption;