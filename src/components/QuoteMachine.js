import React from 'react';
import '.././styles/quotemachine-styles.css';

const API = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes:[],
    }
  }
  componentDidMount() {
    fetch(API).then(response => response.json()).then(data => this.setState({quotes: data}));
  }

  /*componentDidMount() {
    const { quotes } = this.state;
    let number = Math.floor(Math.random() * Math.random());
  }*/
  render() {
    const { quotes } = this.state;
    return (
      <div className="app-wrapper">
        { quotes.map( quote =>
          <blockquote>
            {quote.content}
            <label htmlFor="author">-  <span>{quote.title}</span></label>
          </blockquote>
        )}
        <i className="twitter fab fa-twitter"></i>
        <button >Get Random</button>
      </div>
      )
  }
}
export default QuoteMachine;
