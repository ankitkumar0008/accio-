import { useState } from "react";
import "./styles.css";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState("");
  const [error, setError] = useState("");

  // TODO: addQuote function
  function addQuote(){
    if(quote.trim()==""){
      setError("please provide valid input") 
      return
    }
    const id = Math.floor(Math.random()*100);
    const newQuote = {quote,id:id}
    setQuotes(prev=>[...prev,newQuote]);
    setQuote("");
  }
  // TODO: deleteQuote function

  function deleteQuote(e){
    const delid = e.target.id;
    const filterquotes = quotes.filter((q)=>q.id!=delid);
    setQuotes(filterquotes);
  }

  return (
    <div id="app-container">
      <h1 id="title">MiniQuotes</h1>

      {/* Input Section */}
      <div id="input-section">
        <input
          id="quote-input"
          type="text"
          placeholder="Write a quote..."
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        />
        <button id="add-btn" onClick={addQuote}>Add</button>
      </div>

      {/* Error Message */}
      {error && <p id="error-msg">{error}</p>}

      {/* Quotes List */}
      <div id="quotes-list">
        {/* TODO: show empty state */}
        {quotes.map((q)=>(
          <div className="quote-card" key={q.id}>
            <p className="quote-text" >{q.quote}</p>
            <button  id ={ q.id} className="delete-btn" onClick={deleteQuote}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
