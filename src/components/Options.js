import React from 'react';

import Option from './Option';

const Options = (props) => {
  return (
    <div>
      <div className='widget-header'>
        <h3>Your Options</h3>
        <button 
          className='button button--link'
          onClick={props.handlerDeleteOptions}
        >remove all</button>
      </div>
      {props.options.length === 0 && 
        <p 
          className='widget__message'
        >Please add an option and to get started!</p>}
      <Option 
        options={props.options} 
        handlerRemoveItem={props.handlerRemoveItem}
      />
    </div>
  );
}

export default Options;