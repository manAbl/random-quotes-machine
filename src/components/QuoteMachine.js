import React from 'react';
import Button from './Button';
import Quotes from './Quotes.js';
import '.././styles/quotemachine-styles.css';

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote:"Hello There"
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      quote: "Bye Bye"
    })
  }

  render() {
    return(
      <div className="app-wrapper">
        <h1>Random Quote Machine</h1>
        <hr className="star"/>
        <p> Serving you fantastic quotes that inspire people since 2018</p>
        <Button onClick={this.handleClick} />
        <Quotes quote={this.state.quote} />
      </div>
      )
  }
}
export default QuoteMachine;
