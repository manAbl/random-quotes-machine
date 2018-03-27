import React from 'react';
import '.././styles/quotes-styles.css'

const Quotes = ({quote}) => {
  return (
      <div className="quotes-wrapper">
        <p>{quote}</p>
      </div>
    )
}

export default Quotes;
