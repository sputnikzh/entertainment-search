import { useState } from "react";

function Form(props) {
  const [type, setType] = useState("");
  const handleRadioBtn = (e) => {
    setType(e.target.value);
  };
  const [request, setRequest] = useState("");
  const handleRequest = (e) => {
    setRequest(e.target.value);
  };
  const submit = props.submit;
  const disable = props.disable;

  return (
    <div className="form">
      <div className="radio">
        <div className="All">
          <span>All</span>
          <input
            checked={type === ""}
            onChange={handleRadioBtn}
            name="radio"
            type="radio"
            value=""
          />
        </div>
        <div>
          <span>Movies</span>
          <input
            checked={type === "movie"}
            onChange={handleRadioBtn}
            name="radio"
            type="radio"
            value="movie"
          />
        </div>
        <div>
          <span>Series</span>
          <input
            checked={type === "series"}
            onChange={handleRadioBtn}
            name="radio"
            type="radio"
            value="series"
          />
        </div>
        <div>
          <span>Games</span>
          <input
            checked={type === "game"}
            onChange={handleRadioBtn}
            name="radio"
            type="radio"
            value="game"
          />
        </div>
      </div>
      <div className="text">
        <input onChange={handleRequest} type="text" />
        <button
          onClick={() => {
            submit(type, request);
          }}
          disabled={disable}
        >
          Find
        </button>
      </div>
    </div>
  );
}
export default Form;
