import "./Filter.css";

const Filter = ({ years, selectedYear, setSelectedYear }) => {
  return (
    <div className="expenses-filter">
      <label>Filter By Year:</label>
      <select onChange={() => {}}>
        {years.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default Filter;
