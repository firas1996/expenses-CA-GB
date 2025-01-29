import "./ExpenseItem.css";

const ExpenseItem = ({ title, price, date }) => {
  // const { title, price, date } = props;
  const month = date.toLocaleString("ar-SA", { month: "long" });
  const day = date.toLocaleString("ar-TN", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
