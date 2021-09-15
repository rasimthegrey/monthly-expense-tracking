import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

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
      <NewExpense />
      <Expenses items={expenses}/>
      
    </div>
  );
}

export default App;
