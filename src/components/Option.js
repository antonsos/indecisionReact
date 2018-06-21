import React from 'react';

const Option = (props) => {
  return (
    <ul className='options'>
      {
        props.options.map((option, i) => {
          return (
            <li key={i}
              className='option'
            >
            <p className='option__text'>{i + 1}. {option}</p>
            <button 
              className='button button--link'
              onClick={(e) => props.handlerRemoveItem(option)}
            >remove</button>
            </li>)
        })
      }
    </ul>
  );
}

export default Option;