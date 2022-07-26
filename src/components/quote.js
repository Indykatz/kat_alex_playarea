import { useEffect, useState } from "react";
import { fetchQuotes } from "../utlis";

const Quote = () => {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    fetchQuotes(setQuote);
  }, []);
  return (
    <div>
      <p>
        "{quote.en}" <b>{quote.author}</b>
      </p>
    </div>
  );
};

export default Quote;
