import './ExpenseItem.css'
import Card from '../User Interface/Card'

import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item-description">
                <h2>{props.title}</h2>
                <div className="expense-item-price">${props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem
