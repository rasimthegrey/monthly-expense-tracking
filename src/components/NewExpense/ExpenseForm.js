import "./ExpenseForm.css"

const ExpenseForm = () => {
    return (
        <form>
            <div className="new-expense-controls">
                {/*title*/}
                <div className="new-expense-control">
                    <label>Title</label>
                    <input type="text" placeholder="Expense" />
                </div>

                {/*amount*/}
                <div className="new-expense-control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" />
                </div>

                {/*date*/}
                <div className="new-expense-control">
                    <label>Amount</label>
                    <input type="date" min="2021-01-01" max="2021-12-31"/>
                </div>

            </div>
            <div className="new-expense-actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
