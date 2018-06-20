import React from 'react';

const Header = (props) => {
  return (
    <header>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
    </header>
  );
}

export default Header;