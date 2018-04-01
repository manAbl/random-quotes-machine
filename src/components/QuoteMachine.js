import React from 'react';
import '.././styles/quotemachine-styles.css';

const API = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10';

const myHeaders = new Headers({
  "X-Mashape-Key": "jF4KXIiieQmshA5TsCPoKY4Jx8DJp1EYqivjsnfil86uJbD0IM",
  "Content-Type": "application/x-www-form-urlencoded",
  "Accept": "application/json"
});

const body = {
  method: 'POST',
  headers: myHeaders,
  cache: 'false'
};

const myRequest = new Request(API, body);

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      loading: false,
      error: null,
    }
    this.handleClick = this.handleClick.bind(this);
    this.fetchingQuotes = this.fetchingQuotes.bind(this);
  }
  fetchingQuotes () {
    fetch(myRequest).then(
      response => response.json()).then(
        data => this.setState({ quotes: data , loading: false })).catch(
          error => this.setState({
            error: error,
            loading: false }));
  }
  componentDidMount() {
    this.setState({
      loading: true,
    })

   this.fetchingQuotes();
  }
  /*tweetQuote() {
    let twitterURL = 'https://twitter.com/intent/tweet?hashtags=quotes,freeCodeCamp&related=freecodecamp&text="';
    let quote = document.getElementById('quote').String();
    let author = document.getElementById('author').String();
       twitterURL +=quote +'" - '+ author;
      return twitterURL;
   }*/
  handleClick() {
    this.fetchingQuotes();
  }
  render() {
    const { error, quotes, loading } = this.state;
    const blockquote = error ? (
      <blockquote>
        Something went wrong ... :(
      </blockquote>
      ) : ( loading ? (
      <blockquote>
        Loading ...
      </blockquote>
      ) : (
      <blockquote>
        <i className="fas fa-quote-right"></i> <p id="quote">{ quotes.quote }</p>
        <label id="author"htmlFor="author">- <span> { quotes.author } </span></label>
      </blockquote>
      ));

    return (
      <div className="app-wrapper">
          { blockquote }
        <button className="twitter-btn"><i className="twitter fab fa-twitter"></i></button>
        <button className="random-btn" onClick={this.handleClick}>Get Random <i className="fas fa-random"></i></button>
      </div>
      )
  }
}
export default QuoteMachine;
