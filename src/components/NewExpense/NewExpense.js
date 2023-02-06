import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [newExpense, setNewExpense] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expendData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        //console.log(expendData);
        props.onAddExpense(expendData);
        setNewExpense(false);
    };

    const addExpenseHandler = () => {
        setNewExpense(true);
    };

    const cancelNewExpenseHandler = () => {
        setNewExpense(false);
        console.log('canceled.');
    };

    return (
        <div className="new-expense">
            {
                (!newExpense) && <button onClick={addExpenseHandler}>Add Expense</button>
            }
            {
                newExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpense={cancelNewExpenseHandler} />
            }

        </div>
    );
}

export default NewExpense;