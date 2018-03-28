import React from 'react';
import '.././styles/quotemachine-styles.css';

const API = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes:[]
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    fetch(API).then(response => response.json()).then(data => this.setState({ quotes: data }));
  }
  handleClick() {
    this.setState({
      quotes: "Bye Bye"
    })
  }
  render() {
    return(
      <div className="app-wrapper">
        <blockquote>
          <p>{this.state.quote}</p>
          <label htmlFor="author">-{this.state.title} <span></span></label>
        </blockquote>
        <i className="twitter fab fa-twitter"></i>
        <button onClick={this.handleClick}>Get Random</button>
      </div>
      )
  }
}
export default QuoteMachine;
