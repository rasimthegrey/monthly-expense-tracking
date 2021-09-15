import { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = event => {

        //get user input with 'event.target.value'
        setEnteredTitle(event.target.value)
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value}
        // })
    }

    const amountChangeHandler = event => {

        setEnteredAmount(event.target.value)
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value}
        // })
    }

    const dateChangeHandler = event => {

        setEnteredDate(event.target.value)
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value}
        // })
    }

    const submitHandler = event => {
        event.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData)
        //2-way binding
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense-controls">
                {/*title*/}
                <div className="new-expense-control">
                    <label>Title</label>
                    <input
                        type="text"
                        //two-way binding
                        value={enteredTitle}
                        placeholder="Expense"
                        onChange={titleChangeHandler}
                    />
                </div>

                {/*amount*/}
                <div className="new-expense-control">
                    <label>Amount</label>
                    <input
                        type="number"
                        placeholder="$0.00"
                        min="0.01"
                        step="0.01"
                        //two-way binding
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>

                {/*date*/}
                <div className="new-expense-control">
                    <label>Amount</label>
                    <input
                        type="date"
                        min="2021-01-01"
                        max="2021-12-31"
                        //two-way binding
                        value={enteredDate}
                        onChange={dateChangeHandler}/>
                </div>

            </div>
            <div className="new-expense-actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
