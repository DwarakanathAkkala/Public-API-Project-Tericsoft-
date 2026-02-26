import { useEffect, useState } from "react";

const QuoteGenerator = () => {

  const [quote, setQuote] = useState("")

  useEffect(() => {
    fetchQuote();

  }, [])
  
  const fetchQuote = async() => {
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();
      console.log(data);
      setQuote(data.quote)
    } catch (error) {
      
    }
  }

  return (
    <div className="quote-generator">
      <h1>Inspiration</h1>

      <p>{quote}</p>
    </div>
  )
}

export default QuoteGenerator