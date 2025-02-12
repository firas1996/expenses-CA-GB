import "./Filter.css";

const Filter = ({ years }) => {
  return (
    <div className="expenses-filter">
      <label>Filter By Year:</label>
      <select>
        {years.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default Filter;
