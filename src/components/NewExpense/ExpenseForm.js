
import './ExpenseForm.css';
import React, { useState } from 'react';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // console.log(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        //console.log(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value };
        // });
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // console.log(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value };
        // });
    };

    const sumbitHandler = (event) => {
        console.log('submit');
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={sumbitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2022-01-01" max="2023-12-31" onChange={dateChangeHandler} value={enteredDate} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={props.onCancelExpense}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;