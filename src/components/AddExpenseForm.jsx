import { useState } from "react";
import "./AddExpenseForm.css";

const AddExpenseForm = () => {
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
    date: "",
  });
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
    console.log(inputs);
    setInputs({
      title: "",
      price: "",
      date: "",
    });
  };
  return (
    <div className="new-expense">
      <form onSubmit={submitForm}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              onChange={inputsHandler}
              value={inputs.title}
              name="title"
              placeholder="Title"
            />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input
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
          <button>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpenseForm;
