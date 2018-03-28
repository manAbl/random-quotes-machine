import React from 'react';
import '.././styles/quotemachine-styles.css';

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote:"Hello There",
      author:"Nunito"
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
        <blockquote>
          <p>{this.state.quote}</p>
          <label htmlFor="author">- <span>{this.state.author}</span></label>
        </blockquote>
        <button onClick={this.handleClick}>Get Random</button>
      </div>
      )
  }
}
export default QuoteMachine;
