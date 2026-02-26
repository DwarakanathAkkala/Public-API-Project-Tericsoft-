import { useState, useEffect } from 'react';
import './QuoteGenerator.css';

const QuoteGenerator = () => {

  const [quote, setQuote] = useState({ content: "", author: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();
      console.log(data)
      setQuote({
        content: data.quote,
        author: data.author
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
   }
  }

  return (
    <div className='quote-generator'>

      <div className='quote-container'>
        
        <h1>Daily Inspiration</h1>

        {loading &&
          <div className='loading-content'>
           <div className='loading-spinner'></div>
           <div className='loading-text'>Loading an awesome Quote...</div>
          </div>
        }

        {!loading && quote.content && (
          <div className='quote-content'>
            <div className="quote-text">{quote.content}</div>
            <div className="quote-author">{quote.author}</div>
          </div>
        )}

        <button className='generate-btn' onClick={fetchQuote} disabled={loading}>
          {loading ? "Loading..." : "Generate New Qoute"}
        </button>

      </div>
    </div>
  )
}

export default QuoteGenerator;