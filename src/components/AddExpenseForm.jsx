import "./AddExpenseForm.css";

const AddExpenseForm = () => {
  const myDate = new Date(Date.now()).getFullYear();
  const minDate = `${myDate - 2}-01-01`;
  const maxDate = `${myDate + 2}-12-31`;
  return (
    <div className="new-expense">
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input placeholder="Title" />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input placeholder="Price" type="number" min="0" step="0.01" />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min={minDate} max={maxDate} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button>Cancel</button>
          <button>Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpenseForm;
