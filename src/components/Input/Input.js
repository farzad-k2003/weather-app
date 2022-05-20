import "./Input.css";

const Input = ({ setQuery }) => {
  let query;

  const changeHandler = (value) => {
    query = value;
  };

  const clickHandler = (e) => {
    e.preventDefault();
    setQuery(query);
  };

  return (
    <div className="input-container">
      <form onSubmit={clickHandler}>
        <input
          type="text"
          placeholder="Enter a city"
          onChange={(event) => changeHandler(event.target.value)}
        />
        <button onClick={clickHandler}>Check</button>
      </form>
    </div>
  );
};

export default Input;
