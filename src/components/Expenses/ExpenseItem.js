import { useState } from 'react'
import './ExpenseItem.css'
import Card from '../User Interface/Card'

import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title)

    //click handler
    const clickHandler = () => {
        setTitle("updated")
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item-description">
                <h2>{title}</h2>
                <div className="expense-item-price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem
