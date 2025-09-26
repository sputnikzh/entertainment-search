import "./App.css";
import Header from "./Header";
import Form from "./Form";
import Cards from "./Cards";
import { useState } from "react";

function App() {
  const submit = async (type, request) => {
    setIsloder(true);
    setError(false);
    setDisable(true);
    setCards([]);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=f7e7aca&s=${request}&type=${type}`
      );
      const result = await response.json();
      if (Object.hasOwn(result, "Search")) {
        setCards(result.Search);
        setFoundCards(true);
      } else {
        setCards([]);
        setFoundCards(false);
      }
    } catch (e) {
      console.log(e);
      setError(true);
    }
    setIsloder(false);
    setDisable(false);
  };
  const [disable, setDisable] = useState(false);
  const [cards, setCards] = useState([]);
  const [isloder, setIsloder] = useState(false);
  const [foundCards, setFoundCards] = useState(null);
  const [error, setError] = useState(false);

  return (
    <div className="App">
      <Header />
      <Form submit={submit} disable={disable} />
      {isloder === true ? <div className="loader"></div> : null}
      <Cards cards={cards} foundCards={foundCards} error={error} />
      {foundCards === false ? <p>Not found</p> : null}
      {error === true ? <p>an error accurred</p> : null}
    </div>
  );
}

export default App;
