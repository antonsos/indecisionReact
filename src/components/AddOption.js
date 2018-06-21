import React from 'react';

const AddOption = (props) => {
  return (
    <div>
      {props.error && <p className='add-option-error'>{props.error}</p>}
      <form className='add-option' onSubmit={props.handlerAddOption}>
        <input type="text" name="option" className='add-option__input' placeholder="Add Option component"/>
        <button
          className='button'
        >Add</button>
      </form>
    </div>
  );
}

export default AddOption;