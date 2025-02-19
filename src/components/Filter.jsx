import "./Filter.css";

const Filter = ({ years, selectedYear, setSelectedYear }) => {
  return (
    <div className="expenses-filter">
      <label>Filter By Year:</label>
      <select
        onChange={(event) => {
          setSelectedYear(event.target.value);
        }}
        value={selectedYear}
      >
        {years.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
