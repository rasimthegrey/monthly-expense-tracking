import { useState } from "react"
import Card from "../User Interface/Card"
import ExpenseFilter from "./ExpenseFilter"
import ExpensesList from "./ExpensesList"
import "./Expenses.css"

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <div>        
            <Card className="expenses">
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesList items={filteredExpenses} />    
            </Card>
        </div>
    )
}

export default Expenses
