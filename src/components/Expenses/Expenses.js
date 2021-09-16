import { useState } from "react"
import ExpenseItem from "./ExpenseItem"
import Card from "../User Interface/Card"
import ExpenseFilter from "./ExpenseFilter"
import "./Expenses.css"

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    return (
        <div>        
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseItem title={props.items[0].title} amount={props.items[0].price} date={props.items[0].date}/>
                <ExpenseItem title={props.items[1].title} amount={props.items[1].price} date={props.items[1].date}/>
                <ExpenseItem title={props.items[2].title} amount={props.items[2].price} date={props.items[2].date}/>    
            </Card>
        </div>
    )
}

export default Expenses
