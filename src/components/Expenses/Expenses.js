import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpensesChart';
import './Expenses.css'

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('all');

    const filterHandler = (selectedYear) => {
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((item) => {
        if (filteredYear === "all")
            return true;
        else
            return item.date.getFullYear().toString() === filteredYear;
    });

    return (
        <>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onFilter={filterHandler} />
                <ExpenseChart expenses={filteredExpenses} />
                <ExpenseList expenses={filteredExpenses} />
                {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
                <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}
            </Card>
        </>

    );
}

export default Expenses;