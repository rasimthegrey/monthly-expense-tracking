import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [
    {
      id: 1,
      title: "Desk",
      price: 75,
      date: new Date(2021, 9, 8)
    },
    {
      id: 2,
      title: "Mousepad",
      price: 7,
      date: new Date(2021, 9, 8)
    }
  ]

  return (
    <div className="App">
      <ExpenseItem title={expenses[0].title} amount={expenses[0].price} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].price} date={expenses[1].date}/>
    </div>
  );
}

export default App;
