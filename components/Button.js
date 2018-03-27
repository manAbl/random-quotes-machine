import React from 'react';
import '.././styles/button-styles.css'

const Button = ({onClick}) => {
  return (
      <div className="button-wrapper">
        <span onClick={onClick}> Get Random </span>
      </div>
    )
}

export default Button;
