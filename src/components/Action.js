import React from 'react';

const Action = (props) => {
  return (
    <div>
      <button 
      onClick={props.handlerPick}
      disabled={!props.hasOptions}
      >What shold I do?</button>
    </div>
  );
}

export default Action;