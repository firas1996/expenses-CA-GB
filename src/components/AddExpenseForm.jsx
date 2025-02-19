import { useState } from "react";
import "./AddExpenseForm.css";

const AddExpenseForm = ({ getData }) => {
  const [affiche, setAffiche] = useState(false);
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
    date: "",
  });
  const afficheForm = () => {
    setAffiche(!affiche);
  };
  const inputsHandler = ({ target }) => {
    const { name, value } = target;
    setInputs((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const myDate = new Date(Date.now()).getFullYear();
  const minDate = `${myDate - 2}-01-01`;
  const maxDate = `${myDate + 2}-12-31`;
  const submitForm = (e) => {
    e.preventDefault();
    getData({
      id: Math.random(),
      title: inputs.title,
      price: +inputs.price,
      date: new Date(inputs.date),
    });
    setInputs({
      title: "",
      price: "",
      date: "",
    });
  };
  return (
    <div className="new-expense">
      {affiche ? (
        <form onSubmit={submitForm}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                required
                onChange={inputsHandler}
                value={inputs.title}
                name="title"
                placeholder="Title"
              />
            </div>
            <div className="new-expense__control">
              <label>Price</label>
              <input
                required
                onChange={inputsHandler}
                value={inputs.price}
                name="price"
                placeholder="Price"
                type="number"
                min="0"
                step="0.01"
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                required
                onChange={inputsHandler}
                value={inputs.date}
                name="date"
                type="date"
                min={minDate}
                max={maxDate}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={afficheForm}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      ) : (
        <button onClick={afficheForm}>Add New Expense</button>
      )}
    </div>
  );
};

export default AddExpenseForm;
