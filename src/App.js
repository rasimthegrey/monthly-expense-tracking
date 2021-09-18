import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [
  {
    id: 1,
    title: "Desk",
    amount: 75,
    date: new Date(2021, 9, 8)
  },
  {
    id: 2,
    title: "Mousepad",
    amount: 7,
    date: new Date(2021, 9, 8)
  },
  {
    id: 3,
    title: "Phone",
    amount: 7,
    date: new Date(2020, 10, 3)
  }
]

function App() {

  const [expenses, setExpenses] = useState(initialExpenses)

  const addExpenseHandler = expense => {

    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })

  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
      
    </div>
  );
}

export default App;
