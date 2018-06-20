import React from 'react';

const Option = (props) => {
  return (
    <ul>
      {
        props.options.map((option) => {
          return <li key={option}>
            {option}
            <button onClick={(e) => props.handlerRemoveItem(option)}>remove</button>
            </li>
        })
      }
    </ul>
  );
}

export default Option;