import React from 'react';

import Option from './Option';

const Options = (props) => {
  return (
    <div>
      <div>
        <button onClick={props.handlerDeleteOptions}>remove all</button>
      </div>
      Options components here
      <Option 
        options={props.options} 
        handlerRemoveItem={props.handlerRemoveItem}
      />
    </div>
  );
}

export default Options;