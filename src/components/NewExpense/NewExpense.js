import { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const NewExpense = (props) => {

    const [editing, setEditing] = useState(false)

    const saveExpenseDataHandler = enteredExpense => {
        const expenseData = {
            ...enteredExpense,
            id: Math.random()
        }
        props.onAddExpense(expenseData)
        setEditing(false)
    }

    const editingHandler = () => {
        setEditing(true)
    }

    const cancelEditingHandler = () => {
        setEditing(false)
    }

    return (
        <div className="new-expense">
            {!editing && <button onClick={editingHandler}>Add New Expense</button>}
            {editing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelEditingHandler} />}
        </div>
    )
}

export default NewExpense
