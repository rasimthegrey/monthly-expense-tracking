import ExpenseItem from "./ExpenseItem"
import Card from "../User Interface/Card"
import "./Expenses.css"

const Expenses = (props) => {
    return (
        <Card className="expenses">
            <ExpenseItem title={props.items[0].title} amount={props.items[0].price} date={props.items[0].date}/>
            <ExpenseItem title={props.items[1].title} amount={props.items[1].price} date={props.items[1].date}/>
            
        </Card>
    )
}

export default Expenses
