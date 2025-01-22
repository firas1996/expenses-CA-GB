import ExpenseItem from "./components/ExpenseItem";

function App() {
  const data = [
    {
      id: 1,
      title: "Item 1",
      price: 1111,
      date: new Date(2025, 1, 22),
    },
    {
      id: 2,
      title: "Item 2",
      price: 2222,
      date: new Date(2025, 10, 15),
    },
    {
      id: 3,
      title: "Item 3",
      price: 3333,
      date: new Date(2024, 5, 1),
    },
    {
      id: 4,
      title: "Item 4",
      price: 4444,
      date: new Date(2023, 8, 20),
    },
  ];
  return (
    <div>
      {data.map((item) => {
        return (
          <ExpenseItem title={item.title} date={item.date} price={item.price} />
        );
      })}
    </div>
  );
}

export default App;
